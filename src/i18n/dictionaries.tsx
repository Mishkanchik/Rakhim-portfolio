import React from "react";
import type { Language } from "../context/LanguageContext";
import {
  about as aboutDefault,
  home as homeDefault,
  person as personDefault,
} from "../resources/content";

export const dictionaries: Record<string, any> = {
  ru: {
    person: {
      ...personDefault,
      role: "Аналитик Данных & Бизнес-аналитик",
      location: "Баку, Азербайджан",
    },
    about: { ...aboutDefault },
    home: { ...homeDefault },
  },
  en: {
    person: { ...personDefault, role: "Data & Business Analyst", location: "Baku, Azerbaijan" },
    about: {
      ...aboutDefault,
      label: "About",
      title: `About – ${personDefault.name}`,
      description: `Learn more about ${personDefault.name}, Data Analyst from Baku, Azerbaijan`,
      intro: {
        display: true,
        title: "Introduction",
        description: (
          <>
            I am an analyst with a higher education and practical experience in sales and customer
            service. I worked as a cashier at Gloria Jean's in high-traffic conditions, often
            performing managerial functions, and interacted with premium clients at Infocus.
            <br />
            <br />
            This experience helped me deeply understand clients, business processes, and the impact
            of operational decisions on metrics and reporting. During my master's studies, I majored
            in Business Data Analytics and researched the analysis and optimization of client data
            in long-term businesses. I am currently pursuing a Ph.D. in Economics.
          </>
        ),
      },
      work: {
        display: true,
        title: "Work Experience",
        experiences: [
          {
            company: "Gloria Jean's",
            timeframe: "Past Experience",
            role: "Cashier / Acting Manager",
            achievements: [
              "Working in high customer traffic conditions.",
              "Performing managerial duties, managing operational processes.",
            ],
            images: [],
          },
          {
            company: "Infocus",
            timeframe: "Past Experience",
            role: "Customer Service Specialist",
            achievements: [
              "Interacting with premium clients.",
              "Deep understanding of business processes and the impact of operational decisions on service reporting.",
            ],
            images: [],
          },
        ],
      },
      studies: {
        display: true,
        title: "Education",
        institutions: [
          { name: "Kozybaev University", description: <>Ph.D. in Economics (ongoing).</> },
          {
            name: "UNEC Azerbaijan",
            description: <>Business Management, Specialization "Data Analytics".</>,
          },
          { name: "WayUp Academy", description: <>Web and UX/UI design.</> },
        ],
      },
      technical: {
        display: true,
        title: "Technical Skills",
        skills: [
          {
            title: "Data Analysis",
            description: (
              <>
                I transform raw data into a structured analytical layer: clean, process, calculate,
                and form a dataset for models. I build reproducible data preparation pipelines for
                subsequent modeling.
              </>
            ),
            tags: [
              { name: "SQL", icon: "database" },
              { name: "Python", icon: "node" },
            ],
          },
          {
            title: "Customer Analytics",
            description: (
              <>
                I build customer analytics based on transactional data: calculate scoring, perform
                segmentation, and model churn risk. I use the results to identify profitable
                segments, assess churn risk, target marketing activities, and more.
              </>
            ),
            tags: [
              { name: "RFM", icon: "chart" },
              { name: "K-Means", icon: "chart" },
              { name: "CLV", icon: "chart" },
              { name: "Churn", icon: "chart" },
            ],
          },
          {
            title: "Business Intelligence",
            description: (
              <>
                I develop reporting and dashboards to monitor sales, customer segments, and
                marketing performance. I translate analysis results into clear KPIs and visual
                insights to support management decisions.
              </>
            ),
            tags: [
              { name: "Tableau", icon: "layout" },
              { name: "Excel", icon: "layout" },
              { name: "KPI Dashboards", icon: "dashboard" },
            ],
          },
          {
            title: "Economic Analysis",
            description: (
              <>
                I evaluate the economic efficiency of marketing decisions: modeling the impact of
                budget and discounts on profit by customer segments, etc. I integrate statistics,
                business analytics, and ML forecasts into cost and profitability optimization tasks.
              </>
            ),
            tags: [
              { name: "Statistics", icon: "chart" },
              { name: "Risk Management", icon: "shield" },
            ],
          },
        ],
      },
    },
    home: {
      ...homeDefault,
      label: "Home",
      title: `${personDefault.name} – Data Analytics`,
      description: `Portfolio of analyst ${personDefault.name}`,
      headline: <>Transforming data into insights and effective business decisions</>,
      subline: (
        <>
          I am {personDefault.firstName}, Data & Business Analyst. I specialize in customer
          analytics, business intelligence (BI), and economic efficiency assessment.
        </>
      ),
    },
  },
  az: {
    person: { ...personDefault, role: "Məlumat və Biznes Analitiki", location: "Bakı, Azərbaycan" },
    about: {
      ...aboutDefault,
      label: "Haqqımda",
      title: `Haqqımda – ${personDefault.name}`,
      description: `Bakıdan olan Məlumat Analitiki ${personDefault.name} haqqında daha çox öyrənin`,
      intro: {
        display: true,
        title: "Giriş",
        description: (
          <>
            Mən ali təhsilli və satış, eləcə də müştəri xidmətləri sahəsində praktiki təcrübəyə
            malik analitikəm. Gloria Jean's-də yüksək müştəri axını şəraitində kassir işləmişəm,
            tez-tez menecer funksiyalarını yerinə yetirmişəm, Infocus şirkətində isə premium
            müştərilərlə işləmişəm.
            <br />
            <br />
            Bu təcrübə mənə müştəriləri, biznes proseslərini, eləcə də əməliyyat qərarlarının
            göstəricilərə və hesabatlara təsirini dərindən anlamağa kömək etdi. Magistraturada
            biznes məlumat analitikası üzrə ixtisaslaşmışam və uzunmüddətli biznesdə müştəri
            məlumatlarının analizi və optimallaşdırılması mövzusunu tədqiq etmişəm. Hazırda
            iqtisadiyyat üzrə doktoranturada təhsilimi davam etdirirəm.
          </>
        ),
      },
      work: {
        display: true,
        title: "İş təcrübəsi",
        experiences: [
          {
            company: "Gloria Jean's",
            timeframe: "Keçmiş Təcrübə",
            role: "Kassir / Menecer əvəzi",
            achievements: [
              "Yüksək müştəri axını şəraitində iş.",
              "Menecer funksiyalarının icrası, əməliyyat proseslərinin idarə edilməsi.",
            ],
            images: [],
          },
          {
            company: "Infocus",
            timeframe: "Keçmiş Təcrübə",
            role: "Müştəri xidmətləri üzrə mütəxəssis",
            achievements: [
              "Premium müştərilərlə qarşılıqlı əlaqə.",
              "Biznes proseslərinin və əməliyyat qərarlarının xidmət hesabatlarına təsirinin dərindən anlaşılması.",
            ],
            images: [],
          },
        ],
      },
      studies: {
        display: true,
        title: "Təhsil",
        institutions: [
          {
            name: "Kozybaev University",
            description: <>İqtisadiyyat üzrə doktorantura (hazırda davam edir).</>,
          },
          {
            name: "UNEC Azərbaycan",
            description: <>Biznesin İdarə Edilməsi, "Məlumat Analitikası" ixtisası.</>,
          },
          { name: "WayUp Academy", description: <>Web and UX/UI design.</> },
        ],
      },
      technical: {
        display: true,
        title: "Texniki Bacarıqlar",
        skills: [
          {
            title: "Data Analysis",
            description: (
              <>
                Xam məlumatları strukturlaşdırılmış analitik təbəqəyə çevirirəm: modellər üçün
                məlumat toplusunu təmizləyirəm, emal edirəm, hesablayıram və formalaşdırıram. Təkrar
                istehsal edilə bilən məlumat hazırlığı prosesləri qururam.
              </>
            ),
            tags: [
              { name: "SQL", icon: "database" },
              { name: "Python", icon: "node" },
            ],
          },
          {
            title: "Customer Analytics",
            description: (
              <>
                Tranzaksiya məlumatlarına əsaslanan müştəri analitikasını qururam: skorinq
                hesablayıram, seqmentasiya aparıram və müştəri itkisi (churn) riskini
                modelləşdirirəm. Nəticələrdən gəlirli seqmentləri müəyyən etmək, marketinq
                kampaniyalarını hədəfləmək üçün istifadə edirəm.
              </>
            ),
            tags: [
              { name: "RFM", icon: "chart" },
              { name: "K-Means", icon: "chart" },
              { name: "CLV", icon: "chart" },
              { name: "Churn", icon: "chart" },
            ],
          },
          {
            title: "Business Intelligence",
            description: (
              <>
                Satışları, müştəri seqmentlərini və marketinq effektivliyini izləmək üçün hesabatlar
                və daşbordlar hazırlayıram. Analiz nəticələrini idarəetmə qərarlarını dəstəkləmək
                üçün aydın KPI-lərə və vizual mənzərələrə çevirirəm.
              </>
            ),
            tags: [
              { name: "Tableau", icon: "layout" },
              { name: "Excel", icon: "layout" },
              { name: "KPI Dashboards", icon: "dashboard" },
            ],
          },
          {
            title: "Economic Analysis",
            description: (
              <>
                Marketinq qərarlarının iqtisadi səmərəliliyini qiymətləndirirəm: büdcə və
                endirimlərin müştəri seqmentləri üzrə mənfəətə təsirini modelləşdirirəm. Statistik
                məlumatları, biznes analitikasını və ML proqnozlarını xərclərin və gəlirliliyin
                optimallaşdırılmasına inteqrasiya edirəm.
              </>
            ),
            tags: [
              { name: "Statistics", icon: "chart" },
              { name: "Risk Management", icon: "shield" },
            ],
          },
        ],
      },
    },
    home: {
      ...homeDefault,
      label: "Ana Səhifə",
      title: `${personDefault.name} – Məlumat Analitikası`,
      description: `Analitik ${personDefault.name}-in portfelio-su`,
      headline: <>Məlumatları daxili baxışlara və səmərəli biznes qərarlarına çevirirəm</>,
      subline: (
        <>
          Mən {personDefault.firstName}, Məlumat və Biznes Analitikiyəm. Müştəri analitikası, biznes
          analitikası (BI) və iqtisadi səmərəliliyin qiymətləndirilməsi üzrə ixtisaslaşıram.
        </>
      ),
    },
  },
};

export const getDictionary = (lang: Language) => dictionaries[lang] || dictionaries.ru;
