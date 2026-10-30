/*
 * SUMBER KEBENARAN untuk bahagian dinamik laman ini.
 * Kemas kini fail ini (log, keputusan, tugasan, audit) lalu push ke GitHub.
 * Peraturan projek: tiada rujukan/angka direka. Tanda "UNVERIFIED" jika belum disahkan dengan sumber asal.
 */
window.BRAIN = {
  updated: "2026-10-30",
  source: "emip-halal-project.md (handoff 22 Okt 2026)",

  // status: "open" | "decided"
  decisions: [
    {
      id: "D1",
      title: "Analit sasaran",
      blocks: "Menyekat semua kerja hiliran",
      options: [
        "DNA babi (mtDNA cyt b atau D-loop)",
        "Protein atau peptida babi",
        "Sebatian penanda (gelatin, lemak/lard, dll.)"
      ],
      defaultChoice: "mtDNA babi (cyt b / D-loop)",
      status: "open",
      decision: ""
    },
    {
      id: "D2",
      title: "Hasil akhir",
      options: ["Kertas ulasan (review)", "Kemas kini proposal", "Kedua-duanya"],
      defaultChoice: "Review + kemas kini proposal",
      status: "open",
      decision: ""
    },
    {
      id: "D3",
      title: "Skop matriks",
      options: [
        "Daging mentah",
        "Makanan diproses / dipanaskan",
        "Gelatin",
        "Kosmetik atau farmaseutikal"
      ],
      defaultChoice: "Matriks makanan diproses",
      status: "open",
      decision: ""
    },
    {
      id: "D4",
      title: "Fokus permukaan",
      options: [
        "Monomer (polipirol, polianilina, polidopamina, poli(o-fenilenadiamina), dll.)",
        "Elektrod (screen-printed, emas, glassy carbon)",
        "Pendekatan pengcetakan (templat DNA vs protein)"
      ],
      defaultChoice: "Tiada lalai dinyatakan dalam dokumen",
      status: "open",
      decision: ""
    }
  ],

  // status: "todo" | "doing" | "done"   (rujukan = seksyen dalam dokumen handoff)
  tasks: [
    { id: "T1", text: "Pasang Scientific Agent Skills; senarai skill yang wujud berbanding Seksyen 3", ref: "S13.1", status: "todo" },
    { id: "T2", text: "Cipta struktur folder dan CLAUDE.md", ref: "S13.2", status: "todo" },
    { id: "T3", text: "Putuskan soalan Seksyen 4 (atau guna lalai)", ref: "S13.3", status: "todo" },
    { id: "T4", text: "Jalankan carian Seksyen 7; bina search_log.md dan 20–30 calon kertas pertama", ref: "S13.4", status: "todo" },
    { id: "T5", text: "Isi jadual bukti dan guna checklist penilaian", ref: "S13.5", status: "todo" },
    { id: "T6", text: "Hasilkan conflict map dan jadual tuntutan berkeyakinan (RQ1–3, G1–3)", ref: "S13.6", status: "todo" },
    { id: "T7", text: "Draf kemas kini proposal: Fasa IV dihadapankan; isi placeholder analit", ref: "S13.7", status: "todo" }
  ],

  // Hasil audit ke atas emip-halal-project.md. level: "info" | "warn" | "gap"
  audit: [
    {
      level: "gap",
      title: "Hanya satu fail wujud",
      body: "Folder projek hanya mengandungi emip-halal-project.md. CLAUDE.md, search_log.md, evidence_table.xlsx, subfolder appraisal/synthesis/design/writing/figures/references (Seksyen 11) belum dicipta."
    },
    {
      level: "warn",
      title: "Arahan pembuka tidak sepadan dengan isi",
      body: "Baris pembuka berkata “start at Section 9”, tetapi Seksyen 9 ialah Appraisal Checklist. Senarai tugasan pertama ialah Seksyen 13. Niat sebenar perlu disahkan; laman ini mengikut Seksyen 13."
    },
    {
      level: "warn",
      title: "Dua nama repo dalam arahan pemasangan",
      body: "Arahan memakai K-Dense-AI/scientific-agent-skills dan K-Dense-AI/claude-scientific-skills. Dokumen sendiri menyatakan repo telah dinamakan semula. Belum disahkan arahan mana yang masih sah. UNVERIFIED."
    },
    {
      level: "warn",
      title: "Bilangan dan nama skill belum disahkan",
      body: "Bilangan “134 hingga 150” dan nama skill (Seksyen 3) bersumber daripada senarai pihak ketiga (mdskills.ai, vibeindex.ai), bukan daripada repo utama. Dokumen sendiri meminta pengesahan selepas pemasangan. UNVERIFIED."
    },
    {
      level: "gap",
      title: "Dokumen proposal (.docx) tiada dalam folder",
      body: "Seksyen 2 meringkaskan proposal sedia ada (empat fasa, 24 bulan), tetapi fail asalnya tidak ada di sini. Ringkasan tidak boleh disemak silang dengan teks proposal."
    },
    {
      level: "warn",
      title: "“Working insights” ialah hipotesis, bukan bukti",
      body: "Analisis lima persona terdahulu dibuat tanpa carian literatur langsung (Seksyen 1). Dakwaan seperti “transduksi agak selesai” atau “kunci-mati regulatori kurang dikaji” belum disokong sumber. Layan sebagai hipotesis untuk diuji."
    },
    {
      level: "gap",
      title: "Tiada satu pun rujukan literatur dalam dokumen",
      body: "Seksyen 15 hanya mengandungi tiga URL berkaitan alat. Tiada kertas, DOI atau data eMIP. Mengikut peraturan projek, tiada rujukan boleh ditambah dari ingatan; semuanya mesti datang daripada carian yang dilog."
    },
    {
      level: "gap",
      title: "Analit sasaran masih placeholder",
      body: "Draf Problem Statement dan Significance of Study mengandungi placeholder analit. Lalai dokumen: mtDNA babi (cyt b / D-loop), review + kemas kini proposal, matriks diproses."
    },
    {
      level: "info",
      title: "Formula LOD/LOQ perlu takrifan σ",
      body: "LOD = 3.3σ/S dan LOQ = 10σ/S ialah formula lazim, tetapi dokumen tidak menyatakan σ ialah sisihan piawai apa (blank, residual regresi, atau intersep). Perlu ditetapkan dalam protokol."
    },
    {
      level: "info",
      title: "Nama folder berbeza daripada cadangan",
      body: "Seksyen 11 mencadangkan folder emip-halal/. Folder sebenar ialah Calorimetri_DNA. Tiada kesan fungsi, direkodkan untuk rujukan."
    },
    {
      level: "info",
      title: "Kekuatan dokumen",
      body: "Ada protokol anti-halusinasi yang jelas (Seksyen 12 dan 14), soalan penyelidikan dan jurang (G1–G3) yang konsisten, templat jadual bukti dan checklist yang boleh terus digunakan, serta pengakuan terbuka bahawa LOD dalam buffer tidak bermakna prestasi dalam makanan sebenar."
    }
  ],

  // Entri terbaru di atas. tag: "sistem" | "keputusan" | "bukti" | "nota"
  log: [
    {
      date: "2026-10-30",
      tag: "sistem",
      title: "Laman nota dicipta; dokumen handoff diaudit",
      body: "emip-halal-project.md dibaca penuh dan diaudit (lihat tab Audit). Semua kandungan laman ini diambil daripada dokumen itu. Tiada literatur luar ditambah."
    },
    {
      date: "2026-10-22",
      tag: "sistem",
      title: "Dokumen handoff dihasilkan dalam sesi sembang",
      body: "Sumber asal projek ini, dipindahkan ke Claude Code. Rujukan: emip-halal-project.md."
    }
  ]
};
