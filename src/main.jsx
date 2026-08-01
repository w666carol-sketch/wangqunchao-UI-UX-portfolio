import React, { useCallback, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  Mail,
  Phone,
} from "lucide-react";
import "./styles.css";

import profilePortrait from "../documents/picture/Personal Profile/首屏头像.jpg";
import profileIcon1 from "../documents/picture/Personal Profile/Personal Profile_icon_1.png";
import profileIcon2 from "../documents/picture/Personal Profile/Personal Profile_icon_2.png";
import profileIcon3 from "../documents/picture/Personal Profile/Personal Profile_icon_3.png";
import profileIcon4 from "../documents/picture/Personal Profile/Personal Profile_icon_4.png";
import profileIcon5 from "../documents/picture/Personal Profile/Personal Profile_icon_5.png";
import profileIcon6 from "../documents/picture/Personal Profile/Personal Profile_icon_6.png";
import profileIcon7 from "../documents/picture/Personal Profile/Personal Profile_icon_7.png";
import profileIcon8 from "../documents/picture/Personal Profile/Personal Profile_icon_8.png";
import profileIcon9 from "../documents/picture/Personal Profile/Personal Profile_icon_9.png";
import profileIcon10 from "../documents/picture/Personal Profile/Personal Profile_icon_10.png";
import work1 from "../documents/picture/works/Frame 1940698376.png";
import work2 from "../documents/picture/works/Frame 1940698374.png";
import work3 from "../documents/picture/works/Frame 1940698375.png";
import work4 from "../documents/picture/works/Frame 1940698371.png";
import work5 from "../documents/picture/works/Frame 1940698370.png";
import work6 from "../documents/picture/works/Frame 1940698372.png";
import work7 from "../documents/picture/works/Frame 1940698367.png";
import work8 from "../documents/picture/works/Frame 1940698373.png";
import work9 from "../documents/picture/works/Frame 1940698369.png";
import work10 from "../documents/picture/works/Frame 1940698368.png";
import representative1 from "../documents/picture/Representative works/Frame 1940698510.png";
import representative2 from "../documents/picture/Representative works/Frame 1940698370.png";
import representative3 from "../documents/picture/Representative works/Frame 1940698518.png";
import representative4 from "../documents/picture/Representative works/Frame 1940698519.png";
import representative5 from "../documents/picture/Representative works/Frame 1940698521.png";
import representative6 from "../documents/picture/Representative works/Frame 1940698520.png";
import representative7 from "../documents/picture/Representative works/Frame 1940698522.png";
import representative8 from "../documents/picture/Representative works/Frame 1940698523.png";
import caseArrow from "../documents/picture/main_work/arrow.png";
import caseDownIcon from "../documents/picture/main_work/down.png";
import weekendMainWork from "../documents/picture/main_work/1.jpg";
import rdcsMainWork from "../documents/picture/main_work/2.jpg";
import integrationMainWork from "../documents/picture/main_work/3.jpg";
import buildingMainWork from "../documents/picture/main_work/4.jpg";
import buildingVideo from "../documents/picture/main_work/4.2.mov";
import homeEnergyMainWork from "../documents/picture/main_work/5.jpg";
import kunlunSecondWork from "../documents/picture/main_work/6.2.jpg";
import kunlunThirdVideo from "../documents/picture/main_work/6.3.mov";
import kunlunFourthVideo from "../documents/picture/main_work/6.4.mov";
import businessMainWork from "../documents/picture/main_work/7.jpg";
import otherWork1 from "../documents/picture/main_work/8.1.jpg";
import otherWork2 from "../documents/picture/main_work/8.2.jpg";
import otherWork3 from "../documents/picture/main_work/8.3.jpg";
import otherWork4 from "../documents/picture/main_work/8.4.jpg";
import otherWork5 from "../documents/picture/main_work/8.5.jpg";
import caseUpIcon from "../documents/picture/main_work/up.png";
import titleArrowBlack from "../documents/picture/main_work/arrow_black.png";
import titleLeftBracket from "../documents/picture/main_work/left_kuang.png";
import titleRightBracket from "../documents/picture/main_work/right_kuang.png";

const heroStats = [
  { value: "9+", label: "工作经验" },
  { value: "30+", label: "项目落地" },
  { value: "95%", label: "客户满意度" },
];

const profileIcons = [
  profileIcon1,
  profileIcon2,
  profileIcon3,
  profileIcon4,
  profileIcon5,
  profileIcon6,
  profileIcon7,
  profileIcon8,
  profileIcon9,
  profileIcon10,
];

const capabilities = [
  {
    title: "全链路设计",
    text: "负责 B 端系统、官网、移动端全流程设计，可完成原型、规范、多端可视化，跟进落地验收，适配各业务场景。",
  },
  {
    title: "跨团队落地协作",
    text: "熟知前端实现逻辑，联动产品、开发沟通，输出规范标注，搭建复用组件，统一视觉标准，保障设计高效落地。",
  },
  {
    title: "AI 辅助设计",
    text: "AI 开展创意构思、素材制作，助力智能体平台界面设计，优化设计流程，有效提升设计产出效率。",
  },
  {
    title: "工具与行业积累",
    text: "深耕能源领域，熟练使用 Figma 搭建组件，擅长可视化、多端适配，兼顾 B 端实用性与视觉美观。",
  },
];

const careerItems = [
  {
    time: "2017.06-2018.08",
    company: "北京超维世纪科技有限公司",
    role: "UI设计师",
    tags: ["B端巡检系统", "企业官网视觉", "UI交互"],
  },
  {
    time: "2018.08-2026.04",
    company: "同方泰德软件（北京）有限公司/同方智慧能源有限责任公司",
    role: "UI/AI设计师",
    tags: ["全流程设计", "多端可视化", "组件规范", "AI赋能"],
  },
];

const works = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10];

const representativeWorks = [
  {
    image: representative1,
    titleCn: "周末游",
    titleEn: "weekend go",
    href: "#work-weekend",
  },
  {
    image: representative2,
    titleCn: "中核汇能RDCS",
    titleEn: "Renewable Energy Digital Control System",
    href: "#work-rdcs",
  },
  {
    image: representative3,
    titleCn: "智能化信息集成系统升级",
    titleEn: "Intelligent information integration system",
    href: "#work-integration",
  },
  {
    image: representative4,
    titleCn: "楼宇智能化监控系统V1.0",
    titleEn: "Intelligent building monitoring system",
    href: "#work-building",
  },
  {
    image: representative5,
    titleCn: "户式能源管理",
    titleEn: "Home Energy Management System",
    href: "#work-home-energy",
  },
  {
    image: representative6,
    titleCn: "昆仑数字平台",
    titleEn: "Kunlun Digital Platform",
    href: "#work-kunlun",
  },
  {
    image: representative7,
    titleCn: "经营数据管理平台升级",
    titleEn: "Business data management platform",
    href: "#work-business",
  },
  {
    image: representative8,
    titleCn: "其他",
    titleEn: "Others",
    href: "#work-others",
  },
];

const caseDetails = {
  "#work-weekend": {
    id: "work-weekend-page",
    title: "周末游小程序",
    subtitle: "Weekend Go Mini-Program",
    description:
      "周末游（Weekend Go）是一款面向年轻人周末轻旅行与露营活动的移动端小程序，帮助用户发现、组织和记录周末出行计划，形成从灵感到决策再到体验沉淀的完整闭环。",
    variant: "light",
    metaTags: ["自然", "活力", "轻松", "安全", "趣味社交"],
    media: [
      { type: "image", src: weekendMainWork, alt: "周末游小程序项目详情长图" },
    ],
  },
  "#work-rdcs": {
    id: "work-rdcs-page",
    title: "中核汇能RDCS",
    subtitle: "Renewable Energy Digital Control System",
    description:
      "中核汇能RDCS 平台是高度专业化的「新能源集团级集控 + 能源管理 + 电力交易」一体化系统，核心解决大规模风光储场站的远程管控、智能运维、功率预测与电网协同。",
    stats: [
      { value: "85%", label: "巡检效率", icon: caseUpIcon },
      { value: "67%", label: "运维人力", icon: caseDownIcon },
      { value: "75%", label: "数据决策", icon: caseUpIcon },
    ],
    image: rdcsMainWork,
    imageAlt: "中核汇能 RDCS 项目详情长图",
  },
  "#work-integration": {
    id: "work-integration-page",
    title: "智能化信息集成系统升级",
    subtitle: "Intelligent information integration system",
    description:
      "智慧管控平台即智能建筑系统（Intelligent Building System）智慧管控平台，是一种整合了多种建筑系统和技术，旨在实现建筑物高效、智能、可持续运行与管理的综合性平台。实现建筑管理从“信息化——数字化——智能化”的技术跨越。",
    stats: [
      { value: "90%", label: "巡检效率", icon: caseUpIcon },
      { value: "70%", label: "问题漏报率", icon: caseDownIcon },
      { value: "30s", label: "故障上报时间为" },
    ],
    image: integrationMainWork,
    imageAlt: "智能化信息集成系统升级项目详情长图",
  },
  "#work-business": {
    id: "work-business-page",
    title: "经营数据管理平台升级",
    subtitle: "Business data management platform",
    description:
      "公司内部经营管理平台，对工程合同全生命周期进行数字化管控。核心功能包括合同管理、资金管理、发票管理和文档系统管理等。系统界面老旧，操作流程复杂，工作效率低下，需要对合同管理页面进行升级。",
    stats: [
      { value: "80%", label: "管理效率", icon: caseUpIcon },
    ],
    image: businessMainWork,
    imageAlt: "经营数据管理平台升级项目详情长图",
  },
  "#work-building": {
    id: "work-building-page",
    title: "楼宇智能化监控系统V1.0",
    subtitle: "Intelligent building monitoring system",
    description:
      "面向楼宇智能化场景的监控系统升级，围绕设备运行、告警处理、空间可视化与运营管理建立统一界面，提升复杂楼宇状态感知与日常管理效率。",
    stats: [
      { value: "80%", label: "管理效率", icon: caseUpIcon },
    ],
    video: buildingVideo,
    videoPoster: buildingMainWork,
    image: buildingMainWork,
    imageAlt: "楼宇智能化监控系统 V1.0 项目详情长图",
  },
  "#work-home-energy": {
    id: "work-home-energy-page",
    title: "户式能源管理",
    subtitle: "Home Energy Management System",
    description:
      "面向家庭能源场景的移动端管理系统，整合用能监测、设备状态、数据统计和场景控制，帮助用户更直观地理解能耗变化并完成日常能源管理。",
    stats: [
      { value: "80%", label: "管理效率", icon: caseUpIcon },
    ],
    image: homeEnergyMainWork,
    imageAlt: "户式能源管理项目详情长图",
  },
  "#work-kunlun": {
    id: "work-kunlun-page",
    title: "昆仑数字平台",
    subtitle: "Kunlun Digital Platform",
    description:
      "昆仑数字平台围绕孪生应用、物联接入、智能建筑、综合能源与零碳园区等业务场景，构建统一的数字化平台能力，支持多业务系统的可视化承载与协同管理。",
    stats: [
      { value: "80%", label: "平台能力", icon: caseUpIcon },
    ],
    media: [
      { type: "image", src: kunlunSecondWork, alt: "昆仑数字平台第二屏效果图" },
      { type: "video", src: kunlunThirdVideo, alt: "昆仑数字平台第三屏演示视频", title: "微服务", clickToPlay: true },
      { type: "video", src: kunlunFourthVideo, alt: "昆仑数字平台第四屏演示视频", title: "昆仑灵境", clickToPlay: true },
    ],
  },
  "#work-others": {
    id: "work-others-page",
    title: "其他",
    subtitle: "Others",
    metaTags: ["海报", "视频", "LOGO", "期刊", "宣传册"],
    gallery: [
      { src: otherWork1, alt: "其他作品海报与期刊设计" },
      { src: otherWork2, alt: "其他作品 LOGO 设计" },
      { src: otherWork3, alt: "其他作品海报设计" },
      { src: otherWork4, alt: "其他作品宣传册设计" },
      { src: otherWork5, alt: "其他作品旗帜设计" },
    ],
  },
};

function parseHSL(hslStr) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 40, s: 80, l: 80 };
  return {
    h: parseFloat(match[1]),
    s: parseFloat(match[2]),
    l: parseFloat(match[3]),
  };
}

function buildGlowVars(glowColor, intensity) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ["", "-60", "-50", "-40", "-30", "-20", "-10"];
  const vars = {};

  for (let i = 0; i < opacities.length; i += 1) {
    vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(
      opacities[i] * intensity,
      100,
    )}%)`;
  }

  return vars;
}

const GRADIENT_POSITIONS = [
  "80% 55%",
  "69% 34%",
  "8% 6%",
  "41% 38%",
  "86% 85%",
  "82% 18%",
  "51% 4%",
];
const GRADIENT_KEYS = [
  "--gradient-one",
  "--gradient-two",
  "--gradient-three",
  "--gradient-four",
  "--gradient-five",
  "--gradient-six",
  "--gradient-seven",
];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildGradientVars(colors) {
  const vars = {};

  for (let i = 0; i < 7; i += 1) {
    const color = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    vars[GRADIENT_KEYS[i]] =
      `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${color} 0px, transparent 50%)`;
  }

  vars["--gradient-base"] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

function easeOutCubic(x) {
  return 1 - (1 - x) ** 3;
}

function easeInCubic(x) {
  return x * x * x;
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd,
}) {
  const t0 = performance.now() + delay;

  function tick() {
    const elapsed = performance.now() - t0;
    const t = Math.min(elapsed / duration, 1);
    onUpdate(start + (end - start) * ease(t));

    if (t < 1) requestAnimationFrame(tick);
    else if (onEnd) onEnd();
  }

  setTimeout(() => requestAnimationFrame(tick), delay);
}

function BorderGlow({
  children,
  className = "",
  edgeSensitivity = 30,
  glowColor = "40 80 80",
  backgroundColor = "#120F17",
  borderRadius = 8,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ["#c084fc", "#f472b6", "#38bdf8"],
  fillOpacity = 0.5,
}) {
  const cardRef = useRef(null);

  const getCenterOfElement = useCallback((el) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2];
  }, []);

  const getEdgeProximity = useCallback(
    (el, x, y) => {
      const [cx, cy] = getCenterOfElement(el);
      const dx = x - cx;
      const dy = y - cy;
      let kx = Infinity;
      let ky = Infinity;

      if (dx !== 0) kx = cx / Math.abs(dx);
      if (dy !== 0) ky = cy / Math.abs(dy);

      return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
    },
    [getCenterOfElement],
  );

  const getCursorAngle = useCallback(
    (el, x, y) => {
      const [cx, cy] = getCenterOfElement(el);
      const dx = x - cx;
      const dy = y - cy;

      if (dx === 0 && dy === 0) return 0;

      const radians = Math.atan2(dy, dx);
      let degrees = radians * (180 / Math.PI) + 90;
      if (degrees < 0) degrees += 360;
      return degrees;
    },
    [getCenterOfElement],
  );

  const handlePointerMove = useCallback((event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const edge = getEdgeProximity(card, x, y);
    const angle = getCursorAngle(card, x, y);

    card.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`);
    card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
  }, [getEdgeProximity, getCursorAngle]);

  useEffect(() => {
    if (!animated || !cardRef.current) return;

    const card = cardRef.current;
    const angleStart = 110;
    const angleEnd = 465;
    card.classList.add("sweep-active");
    card.style.setProperty("--cursor-angle", `${angleStart}deg`);

    animateValue({
      duration: 500,
      onUpdate: (value) => card.style.setProperty("--edge-proximity", value),
    });
    animateValue({
      ease: easeInCubic,
      duration: 1500,
      end: 50,
      onUpdate: (value) => {
        card.style.setProperty(
          "--cursor-angle",
          `${(angleEnd - angleStart) * (value / 100) + angleStart}deg`,
        );
      },
    });
    animateValue({
      ease: easeOutCubic,
      delay: 1500,
      duration: 2250,
      start: 50,
      end: 100,
      onUpdate: (value) => {
        card.style.setProperty(
          "--cursor-angle",
          `${(angleEnd - angleStart) * (value / 100) + angleStart}deg`,
        );
      },
    });
    animateValue({
      ease: easeInCubic,
      delay: 2500,
      duration: 1500,
      start: 100,
      end: 0,
      onUpdate: (value) => card.style.setProperty("--edge-proximity", value),
      onEnd: () => card.classList.remove("sweep-active"),
    });
  }, [animated]);

  const glowVars = buildGlowVars(glowColor, glowIntensity);

  return (
    <div
      ref={cardRef}
      className={`border-glow-card ${className}`}
      onPointerMove={handlePointerMove}
      style={{
        "--card-bg": backgroundColor,
        "--edge-sensitivity": edgeSensitivity,
        "--border-radius": `${borderRadius}px`,
        "--glow-padding": `${glowRadius}px`,
        "--cone-spread": coneSpread,
        "--fill-opacity": fillOpacity,
        ...glowVars,
        ...buildGradientVars(colors),
      }}
    >
      <span className="edge-light" aria-hidden="true" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
}

function App() {
  const [navFloating, setNavFloating] = useState(false);
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    let frame = 0;

    const updateNav = () => {
      setNavFloating(window.scrollY >= window.innerHeight * 0.9);

      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / (window.innerHeight * 0.78), 1);
        const eased = progress * progress * (3 - 2 * progress);
        document.documentElement.style.setProperty("--hero-design-scale", String(1 - eased));
        document.documentElement.style.setProperty("--hero-design-opacity", String(1 - eased));
        frame = 0;
      });
    };

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", updateNav);
    };
  }, []);

  useEffect(() => {
    const updateRoute = () => {
      const nextRoute = window.location.hash;
      setRoute(nextRoute);

      if (caseDetails[nextRoute] || nextRoute === "#top" || !nextRoute) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      window.requestAnimationFrame(() => {
        document.querySelector(nextRoute)?.scrollIntoView();
      });
    };

    window.addEventListener("hashchange", updateRoute);

    return () => {
      window.removeEventListener("hashchange", updateRoute);
    };
  }, []);

  if (caseDetails[route]) {
    return (
      <main>
        <WorkDetail detail={caseDetails[route]} />
      </main>
    );
  }

  return (
    <main>
      <SiteNav floating={navFloating} />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

function SiteNav({ floating }) {
  return (
    <nav className={`nav shell${floating ? " isFloating" : ""}`}>
      <a className="brand" href="#top" aria-label="返回首页">
        PORTFOLIO 2026
      </a>
      <div className="navLinks" aria-label="主导航">
        <a href="#top">首页</a>
        <a href="#experience">简介</a>
        <a href="#career">经历</a>
        <a href="#projects">作品</a>
      </div>
      <a className="navCta" href="#contact">
        <Mail size={15} />
        联系我
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <video
        className="heroVideo"
        src="/assets/hero-background.mov"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/hero-poster.svg"
        aria-hidden="true"
      />
      <div className="motionGrid" aria-hidden="true" />

      <div className="heroInner shell">
        <div className="heroTopMark">
          <span>Portfolio</span>
          <span>2026</span>
        </div>
        <div className="heroTitleGroup">
          <HeroTitle label="WANGQUNCHAO" />
        </div>
        <div className="heroStats" aria-label="项目数据">
          {heroStats.map((item) => (
            <Stat key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
        <div className="heroFooter">
          <div className="heroFooterLinks">
            <a href="#projects">Works</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroTitle({ label }) {
  const titleRef = useRef(null);
  const letterRefs = useRef([]);

  const updateLetters = useCallback((clientX, clientY) => {
    const title = titleRef.current;
    if (!title) return;

    const titleRect = title.getBoundingClientRect();
    const radius = Math.max(titleRect.width * 0.18, 150);

    letterRefs.current.forEach((letter) => {
      if (!letter) return;

      const rect = letter.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const distance = Math.hypot(clientX - x, clientY - y);
      const proximity = Math.max(0, 1 - distance / radius);

      letter.style.setProperty("--proximity", proximity.toFixed(3));
      letter.style.fontVariationSettings = `'wght' ${700 + proximity * 250}, 'wdth' ${70 + proximity * 30}`;
    });
  }, []);

  const resetLetters = useCallback(() => {
    letterRefs.current.forEach((letter) => {
      if (!letter) return;
      letter.style.setProperty("--proximity", "0");
      letter.style.fontVariationSettings = "'wght' 700, 'wdth' 70";
    });
  }, []);

  return (
    <h1
      ref={titleRef}
      className="heroVariableTitle"
      aria-label={label}
      onPointerMove={(event) => updateLetters(event.clientX, event.clientY)}
      onPointerLeave={resetLetters}
    >
      {label.split("").map((letter, index) => (
        <span
          aria-hidden="true"
          className="heroTitleLetter"
          key={`${letter}-${index}`}
          ref={(element) => {
            letterRefs.current[index] = element;
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="shell experienceGrid">
        <div className="sectionHead experienceHead">
          <h2>个人简介</h2>
          <p>Personal Profile</p>
        </div>
        <div className="profileVisualCard">
          <img src={profilePortrait} alt="Carol 个人形象" loading="lazy" decoding="async" />
        </div>
        <div className="profileInfoCard">
          <p className="profileTitle">Hi, I am Carol</p>
          <p className="profileIntro">
            拥有 9 年全链路 UI 实战经验，覆盖 PC端、移动端等多终端设计，主导多个 B
            端产品完整设计闭环。可独立完成需求拆解、原型绘制、可视化大屏、组件规范输出，
            全程跟进落地验收。熟练运用 AI 工具辅助设计工作流，参与智能体平台界面标准化搭建，
            持续沉淀可复用设计资产。
          </p>
          <div className="profileTags">
            <span>UI/UX设计师</span>
            <span>Vibe coding</span>
          </div>
          <div className="capabilityGrid">
            {capabilities.map((item) => (
              <article className="capabilityCard" key={item.title}>
                <h3>{item.title}</h3>
                <div>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="toolGrid" aria-label="设计工具">
          {profileIcons.map((icon, index) => (
            <img src={icon} alt="" aria-hidden="true" key={index} loading="lazy" decoding="async" />
          ))}
        </div>
        <div className="careerPath" id="career" aria-label="工作经历">
          <div className="sectionHead compact">
            <h2>工作经历</h2>
            <p>Work Experience</p>
          </div>
          <div className="careerCards">
            {careerItems.map((item) => (
              <article key={item.company}>
                <span className="careerStar" aria-hidden="true" />
                <time>{item.time}</time>
                <h3>{item.company}</h3>
                <span className="careerRole">{item.role}</span>
                <div className="careerTags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="workRail" aria-label="项目预览">
            <div className="workRailRow">
              {[...works.slice(0, 5), ...works.slice(0, 5)].map((image, index) => (
                <figure className="workRailItem" key={`top-${index}`}>
                  <img src={image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
            <div className="workRailRow">
              {[...works.slice(5), ...works.slice(5)].map((image, index) => (
                <figure className="workRailItem" key={`bottom-${index}`}>
                  <img src={image} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function Projects() {
  return (
    <section className="section projectsSection" id="projects">
      <div className="shell representativeShell">
        <div className="sectionHead compact">
          <h2>代表作品</h2>
          <p>Representative works</p>
        </div>
        <div className="representativeGrid">
          {representativeWorks.map((work, index) => (
            <article className={index === 0 ? "tall" : ""} key={work.image}>
              <img src={work.image} alt={`代表作品 ${index + 1}`} loading="lazy" decoding="async" />
              {work.titleCn && (
                <div className="representativeOverlay">
                  <strong>{work.titleCn}</strong>
                  <span>{work.titleEn}</span>
                </div>
              )}
              {work.href && (
                <a className="representativeLink" href={work.href} aria-label={`查看${work.titleCn}项目详情`} />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkDetail({ detail }) {
  const mediaItems = detail.gallery
    ? []
    : detail.media ?? [
        ...(detail.video
          ? [{ type: "video", src: detail.video, poster: detail.videoPoster, alt: detail.imageAlt }]
          : []),
        { type: "image", src: detail.image, alt: detail.imageAlt },
      ];

  return (
    <section className={detail.variant === "light" ? "casePage lightCase" : "casePage"} id={detail.id}>
      <a className="caseBack" href="#projects">
        <ArrowLeft size={16} strokeWidth={1.6} aria-hidden="true" />
        Back
      </a>
      <div className="caseHero shell">
        <div className="caseIntro">
          <div className="caseTitleLine">
            <h1>{detail.title}</h1>
            <img src={caseArrow} alt="" aria-hidden="true" />
          </div>
          <p className="caseSubtitle">{detail.subtitle}</p>
          {detail.description && <p className="caseDescription">{detail.description}</p>}
          {detail.metaTags && (
            <div className="caseMetaTags">
              {detail.metaTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
        {detail.stats && (
          <div className="caseStats" aria-label="项目成效">
            {detail.stats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                {index > 0 && <span className="caseStatDivider" aria-hidden="true" />}
                <div className="caseStat">
                  <div className="caseStatValue">
                    <strong>{stat.value}</strong>
                    {stat.icon && <img src={stat.icon} alt="" aria-hidden="true" />}
                  </div>
                  <span>{stat.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      {detail.gallery && <OtherWorksGallery items={detail.gallery} />}
      {mediaItems.map((item, index) => (
        <CaseMediaItem item={item} key={`${item.src}-${index}`} />
      ))}
      {!detail.hideContact && (
        <div className="caseContact">
          <a href="#contact" aria-label="联系我">
            <span className="contactPhoneIcon" aria-hidden="true">☎</span>
          </a>
        </div>
      )}
    </section>
  );
}

function OtherWorksGallery({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];
  const thumbItems = [...items, ...items];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % items.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <div className="otherGallery shell">
      <div className="otherGalleryMain">
        <img src={activeItem.src} alt={activeItem.alt} decoding="async" />
      </div>
      <div className="otherThumbViewport" aria-label="其他作品缩略图轮播">
        <div className="otherThumbTrack">
          {thumbItems.map((item, index) => {
            const itemIndex = index % items.length;
            return (
              <div className="otherThumbFrame" key={`${item.src}-${index}`}>
                <button
                  className={itemIndex === activeIndex ? "otherThumb active" : "otherThumb"}
                  data-index={itemIndex}
                  type="button"
                  onClick={() => setActiveIndex(itemIndex)}
                  aria-label={`查看其他作品 ${itemIndex + 1}`}
                >
                  <img src={item.src} alt="" loading="lazy" decoding="async" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CaseMediaItem({ item }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(!item.clickToPlay);

  const toggleVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video || !item.clickToPlay) return;

    if (video.paused) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [item.clickToPlay]);

  return (
    <div className={item.title ? "caseMediaWrap titled" : "caseMediaWrap"}>
      {item.title && (
        <div className="caseMediaTitle" aria-hidden="true">
          <img src={titleLeftBracket} alt="" />
          <span>{item.title}</span>
          <img src={titleArrowBlack} alt="" />
          <img src={titleRightBracket} alt="" />
        </div>
      )}
      {item.type === "video" ? (
        <>
          <video
            ref={videoRef}
            src={item.src}
            poster={item.poster}
            autoPlay={!item.clickToPlay}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={item.alt}
            onClick={toggleVideo}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          {item.clickToPlay && !isPlaying && (
            <button className="casePlayButton" type="button" aria-label={`播放${item.title}`} onClick={toggleVideo}>
              ▶
            </button>
          )}
        </>
      ) : (
        <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
      )}
    </div>
  );
}

function Contact() {
  return (
    <section className="contactPage" id="contact">
      <div className="shell contactInner">
        <h2>
          <span>道阻且长</span>
          <span>行则将至</span>
        </h2>
        <div className="contactActions">
          <a href="tel:15811166207">
            <Phone size={20} />
            15811166207
          </a>
          <a href="mailto:15811166207@163.com">
            <Mail size={20} />
            15811166207@163.com
          </a>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<App />);
