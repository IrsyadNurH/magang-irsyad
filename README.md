# Admin Dashboard Yukmari Project - Backend

## Prasyarat
Pastikan Anda memiliki prasyarat berikut sebelum melanjutkan:
- Node.js (versi terbaru)
- npm
- docker
- dbeaver
  
## Langkah-langkah Download dan Install

1. *Clone Repository*
   bash
   git clone https://github.com/IrsyadNurH/magang-irsyad
   cd magang-irsyad
   

2. *Install Dependencies*
   Menggunakan npm:
   bash
   npm install
   
## Cara Menggunakan

1. *Menjalankan Development Server*
   Untuk menjalankan server pengembangan dengan hot module replacement (HMR):
   bash
   npm start

================================================
## Bila ingin menghubungkan ke databasenya

1. nyalakan dulu dockernya
2. sambungkan koneksi ke dbeaver [tambahkan server postgres] cek datanya di .env

Struktur nya

```
admin-backend/
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   ├── routes/
│   │   └── aboutUsRoutes.ts
│   │   └── adminRoutes.ts
│   ├── controllers/
│   │   └── aboutUsController.ts
│   │   └── adminController.ts
│   ├── models/
│   │   └── aboutUsModel.ts
│   │   └── adminModel.ts
│   ├── utils/
│   │   └── generateToken.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── tsconfig.json
├── package.json
```


Bila ingin menjalankan Front end dan backendnya sekaligus , satukan dalam 1 folder 

1. *Clone Repository*
   bash
   git clone https://github.com/Syndrom2211/magang-andri.git
   cd magang-andri
   

2. *Install Dependencies*
   Menggunakan npm:
   bash
   npm install

   
## Cara Menjalankan Backend dan Frontend

1. *Menjalankan Frontend*
   cd magang-andri 
   npm run dev
2. *Menjalankan Backend*
   kembali ke folder utama
   cd magang-irsyad 
   npm start

Struktur folder yang di satukan Example

```
Yukmari
 ├──admin-backend/
 │  ├── src/
 │  │   ├── config/
 │  │   │   └── database.ts
 │  │   ├── middleware/
 │  │   │   └── authMiddleware.ts
 │  │   ├── routes/
 │  │   │   └── aboutUsRoutes.ts
 │  │   │   └── adminRoutes.ts
 │  │   ├── controllers/
 │  │   │   └── aboutUsController.ts
 │  │   │   └── adminController.ts
 │  │   ├── models/
 │  │   │   └── aboutUsModel.ts
 │  │   │   └── adminModel.ts
 │  │   ├── utils/
 │  │   │   └── generateToken.ts
 │  │   ├── app.ts
 │  │   └── server.ts
 │  ├── .env
 │  ├── tsconfig.json
 │  ├── package.json
 ├──MAGANG=ANDRI-MAINC/
 │  ├── node_modules
 │     ├── public/
 │     │   ├──favicon.png
 │     ├── src/
 │     │   ├── assets/
 │     │   │   └── crm.svg
 │     │   │   └── eye-crossed.svg
 │     │   │   └── eye.svg
 │     │   │   └── locked.svg
 │     │   │   └── user.svg
 │     │   │   └── YukMari.svg
 │     │   ├── admin/
 │     │   │   └── CardAdmin.tsx/
 │     │   │   └── DashboardContent.tsx/
 │     │   │   └── Header.tsx/
 │     │   │   └── Konsultasi.tsx/
 │     │   │   └── KontakKami.tsx/
 │     │   │   └── ProgramContent.tsx/
 │     │   │   └── ProjectBimble.tsx/
 │     │   │   └── SettingsContent.tsx/
 │     │   │   └── SideBar.tsx/
 │     │   │   └── Table.tsx/
 │     │   │   └── Testimonila.tsx/
 │     │   │   └── TentangKami.tsx/
 │     │   ├── components/
 │     │   │   └── styles/
 │     │   │   	└── Button.tsx 
 │     │   │   	└── CardCorverLogin.tsx
 │     │   │   	└── CaardForgetPass.tsx
 │     │   │   	└── CardLogin.tsx
 │     │   │   	└── FormForgetPass.tsx
 │     │   │   	└── FormLogin.tsx
 │     │   │   	└── reCaptcha.tsx
 │     │   ├── context/
 │     │   │   └── SearchContext.tsx
 │     │   ├── pages/
 │     │   │   └── ForgetPass.tsx
 │     │   │   └── index.tsx
 │     │   ├── utils/
 │     │   │   └── api.ts
 │     │   ├── app.ts
 │     │   ├── index.css
 │     │   ├── main.tsx
 │     │   └── vite-env.d.ts
 │     ├── .gitgnore
 │     ├── eslint.config.js
 │     ├── index.html
 │     ├── package-lock.json
 │     ├── package.json
 │     ├── README.md
 │     ├── postcss.config.cjs
 │     ├── tailwind.config.js
 │     ├── tsconfig.app.json
 │     ├── tsconfig.json
 │     ├── tsconfig.node.json
 │     ├── vite.config.ts
```
   

   

   
