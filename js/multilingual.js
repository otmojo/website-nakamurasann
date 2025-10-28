// multilingual support
class MultilingualSupport {
    constructor() {
        const stored = localStorage.getItem('language') || 'jp';
        //  'ja' -> 'jp'
        this.currentLanguage = (stored === 'ja') ? 'jp' : stored;
        this.translations = {
            jp: {
                // bar
                'nav.news': 'ニュース',
                'nav.events': 'イベント', 
                'nav.series': '手記',
                'nav.discography': 'ディスコグラフィ',
                'nav.social': 'SOCIAL',
                'nav.contents': 'CONTENTS',
                
                // index
                'home.title': '中村佳穂',
                'home.subtitle': 'Kaho Nakamura',
                'home.description': '手は生き物、声は祈り',
                'home.music': '音楽',
                'home.about': 'About',
                'home.about.text1': '1992年生まれ、ミュージシャン。',
                'home.about.text2': '20歳から京都にて音楽活動をスタートし、音楽その物の様な存在がウワサを呼ぶ。',
                'home.about.text3': 'ソロ、デュオ、バンド、様々な形態で、その音楽性を拡張させ続けている。',
                'home.about.text4': 'ひとつとして同じ演奏はない。見るたびに新しい発見があるその姿は、今後も国内外問わず、共鳴の輪を広げていく。',
                
                // titles
                'page.news': 'ニュース',
                'page.news.subtitle': 'お知らせ',
                'page.events': 'イベント',
                'page.events.subtitle': '公演スケジュール',
                'page.series': '手記',
                'page.series.subtitle': 'となりにすわりますね',
                'page.discography': 'ディスコグラフィ',
                'page.discography.subtitle': '作品一覧',
                
                // events
                'events.upcoming': 'まもなく開催されるイベント',
                'events.past': '過去のイベント',
                'events.venue': '会場:',
                'events.time': '時間:',
                'events.date': '日時:',
                'events.buy_ticket': 'チケットを購入',
                
                // music types
                'music.album': 'アルバム',
                'music.ep': 'EP',
                'music.single': 'シングル',
                
                // footer
                'footer.copyright': '© 2025 中村佳穂. All rights reserved.',

                // discography
                'page.title': 'ディスコグラフィー',
                'section.official': '公式動画',
                'section.live': 'ライブ映像',
                'section.fan': 'ファンアップロード',
                'footer.note': 'リンクをクリックすると新しいタブで動画が開きます。音声抽出は行いません。',

                // news
                'news.1.title': 'Nakamura Kaho PIANO SOLO TOUR2025″ひとりくない”一般発売開始！',
                'news.1.desc': 'Nakamura Kaho PIANO SOLO TOUR2025″ひとりくない”のメインキービジュアルを公開しました！',
                'news.2.title': '中村佳穂チームを手伝っていただける方を募集します。',
                'news.2.desc': '※下記メールアドレスに件名を「チームスタッフ募集」としたうえで、自己紹介とSNSアカウントをお送りください<br>entries.yapi@gmail.com',
                'news.3.title': '音楽ナタリーで特集掲載！',
                'news.3.desc': '音楽ナタリーにて中村佳穂の特集記事が掲載されました。',
                'news.4.title': '新曲「NIA」リリース決定！',
                'news.4.desc': '2024年12月1日にニューシングル「NIA」をリリースします。',
                'news.5.title': 'ライブイベント出演情報',
                'news.5.desc': '2024年11月15日、東京でライブイベントに出演します。',
            },
            en: {
                // bar
                'nav.news': 'NEWS',
                'nav.events': 'EVENTS',
                'nav.series': 'SERIES', 
                'nav.discography': 'DISCOGRAPHY',
                'nav.social': 'SOCIAL',
                'nav.contents': 'CONTENTS',
                
                // index
                'home.title': 'Kaho Nakamura',
                'home.subtitle': '中村佳穂',
                'home.description': 'Hands are living things, voice is prayer',
                'home.music': 'Music',
                'home.about': 'About',
                'home.about.text1': 'Born in 1992, musician.',
                'home.about.text2': 'Started musical activities in Kyoto at the age of 20, and her music-like existence attracts attention.',
                'home.about.text3': 'She continues to expand her musicality in various forms: solo, duo, and band.',
                'home.about.text4': 'No two performances are the same. Her ever-changing presence that offers new discoveries will continue to expand the circle of resonance both domestically and internationally.',
                
                // titles
                'page.news': 'News',
                'page.news.subtitle': 'Announcements',
                'page.events': 'Events',
                'page.events.subtitle': 'Concert Schedule',
                'page.series': 'Series',
                'page.series.subtitle': 'Notes',
                'page.discography': 'Discography',
                'page.discography.subtitle': 'Works',
                
                // events
                'events.upcoming': 'Upcoming Events',
                'events.past': 'Past Events',
                'events.venue': 'Venue:',
                'events.time': 'Time:',
                'events.date': 'Date:',
                'events.buy_ticket': 'Buy Ticket',
                
                // music types
                'music.album': 'Album',
                'music.ep': 'EP',
                'music.single': 'Single',
                
                // footer
                'footer.copyright': '© 2025 Kaho Nakamura. All rights reserved.',

                // discography
                'page.title': 'Discography',
                'section.official': 'Official Videos',
                'section.live': 'Live Records',
                'section.fan': 'Fan Uploads',
                'footer.note': 'Click a link to open the video in a new tab. Audio extraction is not performed.',

                // news
                'news.1.title': 'Nakamura Kaho PIANO SOLO TOUR2025 "Hitorikunai" General Sale Starts!',
                'news.1.desc': 'The main key visual for Nakamura Kaho PIANO SOLO TOUR2025 "Hitorikunai" has been released!',
                'news.2.title': 'We are recruiting staff to help Nakamura Kaho\'s team.',
                'news.2.desc': 'Please send your self-introduction and SNS account to the email below with the subject "Team Staff Recruitment".<br>entries.yapi@gmail.com',
                'news.3.title': 'Featured on Natalie Music!',
                'news.3.desc': 'A special article about Nakamura Kaho has been published on Natalie Music.',
                'news.4.title': 'New Song "NIA" Release Announced!',
                'news.4.desc': 'The new single "NIA" will be released on December 1, 2024.',
                'news.5.title': 'Live Event Appearance Info',
                'news.5.desc': 'Nakamura Kaho will appear at a live event in Tokyo on November 15, 2024.',
            },
            zh: {
                // bar
                'nav.news': '新闻公告',
                'nav.events': '最新活动',
                'nav.series': '文字感悟',
                'nav.discography': '作品一览', 
                'nav.social': 'SOCIAL',
                'nav.contents': 'CONTENTS',
                
                // index
                'home.title': '中村佳穂',
                'home.subtitle': 'Kaho Nakamura',
                'home.description': '手是生物，声音是祈祷',
                'home.music': '音乐',
                'home.about': '关于',
                'home.about.text1': '1992年出生，音乐家。',
                'home.about.text2': '20岁开始在京都进行音乐活动，其音乐般的存在引起关注。',
                'home.about.text3': '以独奏、二重奏、乐队等各种形式，不断扩展其音乐性。',
                'home.about.text4': '没有相同的演奏。她那每次都能带来新发现的身影，今后也将在国内外扩大共鸣的圆圈。',
                
                // titles
                'page.news': '新闻公告',
                'page.news.subtitle': '公告',
                'page.events': '最新活动',
                'page.events.subtitle': '演出日程',
                'page.series': '文字感悟',
                'page.series.subtitle': '手记',
                'page.discography': '作品一览',
                'page.discography.subtitle': '链接列表',
                
                // events
                'events.upcoming': '即将举行的活动',
                'events.past': '过往活动',
                'events.venue': '场地：',
                'events.time': '时间：',
                'events.date': '日期：',
                'events.buy_ticket': '购票',
                
                // music types
                'music.album': '专辑',
                'music.ep': 'EP',
                'music.single': '单曲',
                
                // footer
                'footer.copyright': '© 2025 中村佳穂. 版权所有.',

                // discography
                'page.title': '作品列表',
                'section.official': '官方录制',
                'section.live': '现场录像',
                'section.fan': '粉丝上传',

                // news
                'news.1.title': '中村佳穗钢琴独奏巡演2025“一点也不孤单”一般发售开始！',
                'news.1.desc': '中村佳穗钢琴独奏巡演2025“一点也不孤单”主视觉公开！',
                'news.2.title': '招募中村佳穗团队协助成员。',
                'news.2.desc': '请将自我介绍和社交账号发送到下方邮箱，主题注明“团队工作人员招募”。<br>entries.yapi@gmail.com',
                'news.3.title': '登上Natalie音乐专题！',
                'news.3.desc': 'Natalie音乐网站刊登了中村佳穗的专题报道。',
                'news.4.title': '新曲《NIA》即将发行！',
                'news.4.desc': '2024年12月1日将发行新单曲《NIA》。',
                'news.5.title': '现场演出信息',
                'news.5.desc': '2024年11月15日在东京参加现场演出。',
            }
        };
        
        this.init();
    }
    
    init() {
        this.createLanguageSwitcher();
        this.setLanguage(this.currentLanguage);
        this.setupExternalLinks();
        // API
        window.I18N = {
            getLang: () => this.currentLanguage,
            setLang: (lang) => this.setLanguage(lang),
            t: (key) => (this.translations[this.currentLanguage] || {})[key]
        };
    }
    
    createLanguageSwitcher() {
        const navbar = document.querySelector('.navbar__container');
        if (!navbar) return;
        
        const languageSwitcher = document.createElement('div');
        languageSwitcher.className = 'language-switcher';
        languageSwitcher.innerHTML = `
            <button class="language-btn" data-lang="jp">日本語</button>
            <button class="language-btn" data-lang="en">English</button>
            <button class="language-btn" data-lang="zh">中文</button>
        `;
        
        // avoid duplicate insertion
        const logo = navbar.querySelector('.navbar__logo');
        if (logo && logo.nextSibling) {
            navbar.insertBefore(languageSwitcher, logo.nextSibling);
        } else {
            navbar.appendChild(languageSwitcher);
        }
        
        // event listener
        languageSwitcher.addEventListener('click', (e) => {
            if (e.target.classList && e.target.classList.contains('language-btn')) {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            }
        });
    }
    
    setLanguage(lang) {
        // just in case of unsupported language
        if (!this.translations[lang]) lang = 'en';
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // buttons
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // update
        this.updateContent();

        // ARIA 
        const menuToggle = document.getElementById('menu-toggle');
        const menuButton = document.querySelector('.menu-button');
        const sidebar = document.querySelector('.sidebar');
        if (menuToggle && menuButton && sidebar) {
            const expanded = menuToggle.checked ? 'true' : 'false';
            menuButton.setAttribute('aria-expanded', expanded);
            sidebar.setAttribute('aria-hidden', expanded === 'true' ? 'false' : 'true');
        }
        
        // HTML lang
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : (lang === 'jp' ? 'ja' : 'en');

        // dispatch event
        document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
    }
    
    updateContent() {
        // supporting data-i18n and data-translate while protecting DOM structure
        const elements = document.querySelectorAll('[data-i18n], [data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n') || element.getAttribute('data-translate');
            const translation = (this.translations[this.currentLanguage] || {})[key];
            if (translation != null) {
                element.textContent = translation;
            }
        });
        
        // just in case, support id-based translation
        document.querySelectorAll('[id]').forEach(el => {
            const idKey = el.id;
            const val = (this.translations[this.currentLanguage] || {})[idKey];
            if (val != null && !el.hasAttribute('data-i18n') && !el.hasAttribute('data-translate')) {
                el.textContent = val;
            }
        });
    }
    
    setupExternalLinks() {
        // new tab with preview
        const externalLinks = document.querySelectorAll('a[href^="http"]');
        externalLinks.forEach(link => {
            
            // new tab
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            
            // preview
            this.addLinkPreview(link);
        });
    }
    
    addLinkPreview(link) {
        const preview = document.createElement('div');
        preview.className = 'link-preview';
        preview.textContent = link.href;
        document.body.appendChild(preview);
        
        let showTimeout;
        
        link.addEventListener('mouseenter', (e) => {
            showTimeout = setTimeout(() => {
                const rect = link.getBoundingClientRect();
                const left = Math.max(8, Math.min(rect.left, window.innerWidth - preview.offsetWidth - 8));
                const top = Math.max(8, rect.top - preview.offsetHeight - 10);
                preview.style.left = left + 'px';
                preview.style.top = top + 'px';
                preview.classList.add('show');
            }, 500);
        });
        
        link.addEventListener('mouseleave', () => {
            clearTimeout(showTimeout);
            preview.classList.remove('show');
        });
        
        link.addEventListener('mousemove', (e) => {
            if (preview.classList.contains('show')) {
                const rect = link.getBoundingClientRect();
                const left = Math.max(8, Math.min(rect.left, window.innerWidth - preview.offsetWidth - 8));
                const top = Math.max(8, rect.top - preview.offsetHeight - 10);
                preview.style.left = left + 'px';
                preview.style.top = top + 'px';
            }
        });
    }
}

// initialize
document.addEventListener('DOMContentLoaded', () => {
    new MultilingualSupport();
});

