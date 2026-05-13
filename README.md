KINAN App
<div align="center"> <img src="./assets/logo/KINAN.png" width="140" />
KINAN
Kanal Informasi dan Layanan

Aplikasi mobile internal RSUD Dr. Soetomo untuk komunikasi, informasi, dan layanan terintegrasi bagi seluruh tenaga medis dan pegawai rumah sakit.

</div>
✨ Fitur Utama
🔐 Authentication Login & Register
🏥 Dashboard Informasi Rumah Sakit
📢 Informasi & Pengumuman Internal
🩺 Layanan Medis Terintegrasi
📂 Menu Master Data
👤 Profile Pegawai
🔔 Notifikasi Internal
📱 UI Modern & Responsive
⚡ Dibangun menggunakan React Native + Expo + TypeScript
📸 Tampilan Aplikasi
Landing Screen
<img src="./screenshots/landing.png" width="250" />
Login Screen
<img src="./screenshots/login.png" width="250" />
Dashboard
<img src="./screenshots/dashboard.png" width="250" />
🛠️ Tech Stack
React Native
Expo
TypeScript
NativeWind (Tailwind CSS untuk React Native)
React Navigation
Expo Vector Icons
📦 Instalasi
1. Clone Repository
git clone https://github.com/username/kinan-app.git
2. Masuk ke Folder Project
cd kinan-app
3. Install Dependency
npm install

atau

yarn install
4. Jalankan Project
npx expo start
📱 Menjalankan di Device
Android
Install aplikasi Expo Go
Scan QR Code dari terminal Expo
iOS
Install Expo Go dari App Store
Scan QR Code
📂 Struktur Folder
src/
│
├── screens/
│   ├── auth/
│   │   ├── LandingScreen.tsx
│   │   ├── SignInScreen.tsx
│   │   └── RegisterScreen.tsx
│   │
│   ├── dashboard/
│   └── profile/
│
├── components/
├── navigation/
├── assets/
└── utils/
🚀 Roadmap
 Integrasi API Backend Laravel
 JWT Authentication
 Push Notification
 Dark Mode
 Chat Internal
 Rekam Medis Digital
 Jadwal Dokter
 Upload Dokumen
 Integrasi SSO RSUD Dr. Soetomo
🔐 Authentication Flow
Landing Screen
   ↓
Login / Register
   ↓
Dashboard (Main App)
👨‍💻 Development
Menjalankan Linter
npm run lint
Build Android
npx expo run:android
Build iOS
npx expo run:ios
📄 Environment

Contoh .env

API_URL=https://your-api-url.com/api
🤝 Kontribusi

Pull request dan kontribusi sangat terbuka untuk pengembangan aplikasi KINAN.

📄 License

MIT License

<div align="center">

Developed with ❤️ for RSUD Dr. Soetomo

</div>
