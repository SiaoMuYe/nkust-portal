// 這是 Service Worker，它的存在是為了讓 Chrome 認定這是一個可安裝的 App (WebAPK)
// 它會消除安裝後圖示右下角的 Chrome 小圖示

self.addEventListener('install', (event) => {
    // 安裝時立即啟動
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // 立即接管頁面
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    // 這裡不做複雜的快取，確保您每次打開都能連上網路看到最新內容
    event.respondWith(fetch(event.request));
});