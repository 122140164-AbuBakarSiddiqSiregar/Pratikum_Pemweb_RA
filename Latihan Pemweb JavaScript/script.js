// Mendeklarasikan persentase bobot dan batas nilai kelulusan
const BOBOT_TUGAS = 0.3;
const BOBOT_UTS = 0.3;
const BOBOT_UAS = 0.4;
const BATAS_KELULUSAN = 60;

function hitungNilai() {
    let tugas = parseFloat(document.getElementById('tugas').value);// Mengambil nilai dari input tugas
    let uts = parseFloat(document.getElementById('uts').value);// Mengambil nilai dari input UTS
    let uas = parseFloat(document.getElementById('uas').value);// Mengambil nilai dari input UAS

    // Dalam percabangan ini, program akan mengecek apakah input dari user valid atau tidak
    if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || 
        tugas < 0 || tugas > 100 || 
        uts < 0 || uts > 100 || 
        uas < 0 || uas > 100) {
        alert('Masukkan nilai  0 - 100 untuk semua komponen.');
        return;
    }

    // Proses menghitung kontribusi masing-masing nilai
    let kontribusiTugas = tugas * BOBOT_TUGAS;
    let kontribusiUTS = uts * BOBOT_UTS;
    let kontribusiUAS = uas * BOBOT_UAS;

    // Menghitung total nilai
    let Total_Nilai = kontribusiTugas + kontribusiUTS + kontribusiUAS;

    // Menentukan nilai huruf
    let nilaiHuruf;
    if (Total_Nilai >= 90) {
        nilaiHuruf = 'A';
    } else if (Total_Nilai >= 80) {
        nilaiHuruf = 'B';
    } else if (Total_Nilai >= 70) {
        nilaiHuruf = 'C';
    } else if (Total_Nilai >= 60) {
        nilaiHuruf = 'D';
    } else {
        nilaiHuruf = 'E';
    }

    // Menentukan status lulus/gagal
    let status = Total_Nilai >= BATAS_KELULUSAN ? 'Lulus' : 'Gagal';
    let statusClass = Total_Nilai >= BATAS_KELULUSAN ? 'lulus' : 'gagal';

    // Menampilkan hasil
    let hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = `
        <p>Kontribusi Tugas: ${kontribusiTugas.toFixed(2)}</p>
        <p>Kontribusi UTS: ${kontribusiUTS.toFixed(2)}</p>
        <p>Kontribusi UAS: ${kontribusiUAS.toFixed(2)}</p>
        <p>Rata-rata Tertimbang: ${Total_Nilai.toFixed(2)}</p>
        <p>Nilai Huruf: ${nilaiHuruf}</p>
        <p class="${statusClass}">Status: ${status}</p>
    `;
}
