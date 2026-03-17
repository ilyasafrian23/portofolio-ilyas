
// ==============================
// DATA PENDIDIKAN
// ==============================
const educationData = [
    {
        title: 'SMK 1 Sungai Penuh',
        year: '2022 - 2025',
        icon: 'fa-school',
        description: 'Jurusan TKJ(Teknik Komputer dan Jaringan) dengan fokus pada jaringan komputer, troubleshooting, perakitan komputer,dan Konfigurasi Mikrotik. Selama menempuh pendidikan,saya juga magang selama 6 bulan di divisi IT pt Kerinci Merangin Hydro.',
        achievements: [
            'Lulus dengan nilai rata-rata yang memuaskan',
            'Bisa instalasi kabel Fiber Optik',
            'Bisa Konfigurasi Mikrotik',
            'Bisa merakit PC dan instal OS,MS Office',
            'Instalasi CCTV'
        ]
    },
    {
        title: 'SMP Negeri 3 Sungai Penuh',
        year: '2019 - 2022',
        icon: 'fa-school',
        description: 'Menyelesaikan pendidikan menengah pertama dengan prestasi yang memuaskan. Selama di SMP, saya aktif dalam kegiatan ekstrakurikuler dan mengembangkan minat di bidang teknologi.',
        achievements: [
            'Lulus dengan nilai rata-rata bagus',
            'Aktif dalam kegiatan organisasi sekolah',
            'Mengikuti berbagai kompetisi tingkat sekolah',
            'Menjadi anggota perpustakaan sekolah'
        ]
    },
    {
        title: 'SD Negeri 011',
        year: '2014 - 2019',
        icon: 'fa-school',
        description: 'Menyelesaikan pendidikan dasar pertama dengan prestasi yang memuaskan. Selama di SD, saya aktif dalam kegiatan ekstrakurikuler seperti pramuka.',
        achievements: [
            'Lulus dengan nilai rata-rata bagus',
            'Aktif dalam kegiatan organisasi sekolah',
            'Mengikuti berbagai kompetisi tingkat sekolah',
            'Menjadi anggota pramuka sekolah'
        ]
    }
];

// ==============================
// VARIABLE
// ==============================
let currentEduIndex = 0;

// ==============================
// FUNGSI MODAL EDUCATION
// ==============================

// Buka modal education
function openEduModal(index) {
    currentEduIndex = index;
    var data = educationData[index];
    
    // Update konten modal
    document.getElementById('eduModalTitle').innerText = data.title;
    document.getElementById('eduModalYear').innerText = data.year;
    document.getElementById('eduModalDesc').innerText = data.description;
    document.getElementById('eduModalIcon').className = 'fas ' + data.icon;
    
    // Update list achievements
    var listHtml = '';
    for (var i = 0; i < data.achievements.length; i++) {
        listHtml += '<li>' + data.achievements[i] + '</li>';
    }
    document.getElementById('eduModalList').innerHTML = listHtml;
    
    // Tampilkan modal
    document.getElementById('eduModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Tutup modal education
function closeEduModal() {
    document.getElementById('eduModal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// ==============================
// EVENT LISTENERS
// ==============================

// Tutup modal saat klik di luar konten
document.getElementById('eduModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeEduModal();
    }
});

// Tutup dengan tombol ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeEduModal();
    }
});


// ==============================
// DATA GALLERY / DOKUMENTASI
// ==============================
const galleryData = [
    {
        img: 'images/surat_magang.jpg',
        title: 'Surat Magang',
        desc: 'PT Kerinci Merangin Hydro'
    },
    {
        img: 'images/sertifikat.jpg',
        title: 'Sertifikat Magang',
        desc: 'Penghelesaian 6 Bulan'
    },
    {
        img: 'images/penyerahan.jpg',
        title: 'Penyerahan siswa magang',
        desc: '17-juli-2025'
    },
    {
        img: 'images/penjemputan.jpg',
        title: 'Penjemputan siswa magang',
        desc: '10-desember-2025'
    },
    {
        img: 'images/foto_kegiatan.jpg',
        title: 'Aktivitas IT Support',
        desc: 'Konfigurasi Jaringan'
    },
    {
        img: 'images/rakit_pc.jpg',
        title: 'Aktivitas IT Support',
        desc: 'Perakitan komputer'
    },
    {
        img: 'images/monitoring_cctv.jpg',
        title: 'Aktivitas IT Support',
        desc: 'Monitoring CCTV'
    },
    {
        img: 'images/foto_tunnel2.jpg',
        title: 'Aktivitas IT Support',
        desc: 'Penarikan kabel FO di Tunnel'
    }
];

let currentSlide = 0;
let isZoomed = false;

// ==============================
// FUNGSI MODAL GALLERY
// ==============================

function openModal(index) {
    currentSlide = index;
    var data = galleryData[index];
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    isZoomed = false;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    isZoomed = false;
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = galleryData.length - 1;
    } else if (currentSlide >= galleryData.length) {
        currentSlide = 0;
    }
    var data = galleryData[currentSlide];
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    isZoomed = false;
}

// Tutup dengan ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    }
    if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});

// Tutup saat klik di luar
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});



// ==============================
// MOBILE MENU
// ==============================

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Tutup menu saat klik di luar
document.getElementById('mobileMenu').addEventListener('click', function(e) {
    if (e.target === this) {
        closeMenu();
    }
});

// Tutup menu dengan ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});



// =========================================
//         ANIMASI OPENING
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    // Ambil element opening
    const opening = document.getElementById('opening');
    
    // Setelah animasi selesai (5 detik), sembunyikan opening
    setTimeout(function() {
        opening.classList.add('fade-out');
        
        // Hapus element dari DOM setelah animasi selesai
        setTimeout(function() {
            opening.style.display = 'none';
        }, 1000);
    }, 5000); // 5 detik
});

// =========================================
//    AKHIR ANIMASI OPENING
// =========================================

// =========================================
//         FUNGSI MODAL PDF
// =========================================

// Buka modal PDF
function openPdfModal(pdfUrl) {
    var modal = document.getElementById('pdfModal');
    var frame = document.getElementById('pdfFrame');
    
    if (modal && frame) {
        frame.src = pdfUrl;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Tutup modal PDF
function closePdfModal() {
    var modal = document.getElementById('pdfModal');
    var frame = document.getElementById('pdfFrame');
    
    if (modal && frame) {
        modal.classList.remove('show');
        frame.src = '';
        document.body.style.overflow = 'auto';
    }
}

// =========================================
//      EVENT LISTENERS PDF
// =========================================

// Tutup modal dengan ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePdfModal();
    }
});

// Tutup modal saat klik di luar
document.getElementById('pdfModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closePdfModal();
    }
});

// =========================================
//      AKHIR MODAL PDF
// =========================================

