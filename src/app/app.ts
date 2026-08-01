import { Component, signal, computed, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { TranslationService, Lang, ProjectData } from './i18n';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('nodeCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('scroller') scrollerRef!: ElementRef<HTMLDivElement>;

  // Developer i18n Service
  readonly i18n = new TranslationService();
  readonly t = this.i18n.t;
  readonly currentLang = this.i18n.currentLang;

  // Profile Photo Signal
  readonly profilePhoto = signal<string | null>(null);



  // Section Tracking & Navigation Signals
  readonly SECTIONS = ['overview', 'projects', 'skills', 'experience', 'contact'];
  readonly activeSection = signal<string>('overview');
  readonly selectedCategory = signal<string>('all');
  readonly selectedProject = signal<ProjectData | null>(null);

  readonly currentSectionIndex = computed(() => {
    const idx = this.SECTIONS.indexOf(this.activeSection());
    return idx >= 0 ? idx : 0;
  });

  readonly hasPrev = computed(() => this.currentSectionIndex() > 0);
  readonly hasNext = computed(() => this.currentSectionIndex() < this.SECTIONS.length - 1);

  // Core Static Profile Data
  readonly profile = {
    name: 'Gustavo Andre Argandoña Becerra',
    shortName: 'Andre Argandoña',
    location: 'Huánuco, Perú',
    email: 'andre_arg_0116@outlook.com',
    github: 'https://github.com/Just-a-Spider',
    linkedin: 'https://www.linkedin.com/in/andre-argando%C3%B1a-3011a6263/'
  };

  // Reactive Translated Data
  readonly projects = computed(() => this.t().projectsList);
  readonly skillCategories = computed(() => this.t().skillsList);
  readonly experiences = computed(() => this.t().experiencesList);
  readonly recognitions = computed(() => this.t().recognitionsList);

  readonly filteredProjects = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.projects();
    return this.projects().filter(p => p.category === cat);
  });

  // Three.js 3D Engine State
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private starPoints!: THREE.Points;
  private starPositions!: Float32Array;
  private starColors!: Float32Array;
  private animFrameId: number | null = null;
  private isLowEnd = false;
  private starCount = 3000;
  private mouse = { x: 0, y: 0 };

  ngAfterViewInit() {
    this.detectHardwareCapabilities();
    this.initThreeSpaceEngine();
    this.initVisibilityListener();
  }

  ngOnDestroy() {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  // Hardware Capability Detection for Mobile & Low-End Systems
  private detectHardwareCapabilities() {
    const isMobile = window.innerWidth < 768;
    const isLowCores = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 4;
    this.isLowEnd = isMobile || isLowCores;
    this.starCount = this.isLowEnd ? 1000 : 3000;
  }

  // Tab Inactivity Pause (0% CPU/GPU overhead when backgrounded)
  private initVisibilityListener() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      } else if (!document.hidden && !this.animFrameId) {
        this.animateThreeSpace();
      }
    });
  }



  // Three.js 3D WebGL Space Flight Engine
  private initThreeSpaceEngine() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    // Scene setup
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x050a18, 0.008);

    // Camera setup
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 50);

    // WebGL Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !this.isLowEnd,
      powerPreference: 'high-performance'
    });

    const pixelRatio = this.isLowEnd ? 1.0 : Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Create 3D Starfield Geometry using Float32Array (Zero GC)
    const geometry = new THREE.BufferGeometry();
    this.starPositions = new Float32Array(this.starCount * 3);
    this.starColors = new Float32Array(this.starCount * 3);
    
    const colorPalette = [
      new THREE.Color(0x00f0ff), // Cyan
      new THREE.Color(0xa855f7), // Purple
      new THREE.Color(0xff2a9d), // Pink
    ];

    for (let i = 0; i < this.starCount; i++) {
      this.starPositions[i * 3] = (Math.random() - 0.5) * 300;
      this.starPositions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      this.starPositions[i * 3 + 2] = (Math.random() - 0.5) * 400;
      
      const rand = Math.random();
      let color: THREE.Color;
      
      if (rand > 0.8) {
        // Bright glowing accent stars
        color = colorPalette[Math.floor(Math.random() * colorPalette.length)].clone();
        color.multiplyScalar(1.5);
      } else if (rand > 0.3) {
        // Standard white stars
        color = new THREE.Color(0xffffff);
      } else {
        // Faint distant stars (not glowing)
        color = new THREE.Color(0xffffff);
        color.multiplyScalar(0.2 + Math.random() * 0.2);
      }
      
      this.starColors[i * 3] = color.r;
      this.starColors[i * 3 + 1] = color.g;
      this.starColors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(this.starPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(this.starColors, 3));

    // Generate a circular glowing texture for stars
    const circleCanvas = document.createElement('canvas');
    circleCanvas.width = 32;
    circleCanvas.height = 32;
    const ctx = circleCanvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);
    const starTexture = new THREE.CanvasTexture(circleCanvas);

    // Particle Shader Material
    const material = new THREE.PointsMaterial({
      size: 1.5,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.starPoints = new THREE.Points(geometry, material);
    this.scene.add(this.starPoints);

    // Add Glowing Ambient Point Lights (Cyan & Purple Nebulae)
    const cyanLight = new THREE.PointLight(0x00f0ff, 2, 200);
    cyanLight.position.set(20, 20, 30);
    this.scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2, 200);
    purpleLight.position.set(-20, -20, 20);
    this.scene.add(purpleLight);

    // Mouse Parallax Interaction
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Start 60fps Animation Loop
    this.animateThreeSpace();
  }

  // 60fps WebGL Animation Loop
  private animateThreeSpace = () => {

    // Rotate starfield slowly
    if (this.starPoints) {
      this.starPoints.rotation.y += 0.0002;

      // Mouse parallax camera tilt
      this.camera.rotation.y = -this.mouse.x * 0.05;
      this.camera.rotation.x = this.mouse.y * 0.05;

      // Warp speed star stretch logic
      const positions = this.starPoints.geometry.attributes['position'].array as Float32Array;
      for (let i = 0; i < this.starCount; i++) {
        // Smooth and slow drift speed
        positions[i * 3 + 2] += 0.1;

        // Reset stars passing camera
        if (positions[i * 3 + 2] > 100) {
          positions[i * 3 + 2] = -300;
        }
      }
      this.starPoints.geometry.attributes['position'].needsUpdate = true;
    }

    this.renderer.render(this.scene, this.camera);
    this.animFrameId = requestAnimationFrame(this.animateThreeSpace);
  };

  // Language Switcher Methods
  setLang(lang: Lang) {
    this.i18n.setLang(lang);
  }

  toggleLang() {
    this.i18n.toggleLang();
  }

  // Section Navigation
  scrollToSection(sectionId: string) {
    this.activeSection.set(sectionId);
  }

  setCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  openProjectModal(proj: ProjectData) {
    this.selectedProject.set(proj);
  }

  closeModal() {
    this.selectedProject.set(null);
  }
}
