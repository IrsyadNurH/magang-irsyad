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
   

   
