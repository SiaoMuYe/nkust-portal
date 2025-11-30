// Service Worker Version: 3.0 (Force Update)
// 這個檔案負責讓瀏覽器識別此網頁為可安裝的 PWA 應用程式

self.addEventListener('install', (event) => {
    // 安裝時立即啟動，不等待
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // 立即接管頁面控制權
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // 網路請求策略：直接從網路獲取最新內容，不使用快取
    // 這樣可以確保您每次打開 App 都能看到最新的連結或公告，不會看到舊版
    event.respondWith(fetch(event.request));
});