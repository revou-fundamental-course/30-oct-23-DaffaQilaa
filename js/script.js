// Menambahkan event listener untuk tombol "Hitung BMI"
document.getElementById("calculate").addEventListener("click", function () {
  // Mengambil nilai dari input form
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const weight = parseFloat(document.getElementById("weight").value);
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value);

  // Validasi input
  if (
    isNaN(weight) ||
    isNaN(age) ||
    isNaN(height) ||
    weight <= 0 ||
    age <= 0 ||
    height <= 0
  ) {
    alert("Mohon isi semua field dengan benar.");
    return;
  }

  // Menghitung BMI
  const heightInMeter = height / 100;
  const bmi = weight / (heightInMeter * heightInMeter);

  // Menampilkan hasil BMI
  const bmiValue = document.getElementById("bmi-value");
  const bmiCondition = document.getElementById("bmi-condition");
  const bmiDescription = document.getElementById("bmi-description");
  bmiValue.textContent = bmi.toFixed(2);

  let condition, description;

  if (bmi < 18.5) {
    condition = "Kekurangan Berat Badan";
    description =
      "Anda berada dalam kategori kekurangan berat badan. Pastikan Anda mendapatkan nutrisi yang cukup dan pertimbangkan untuk meningkatkan berat badan secara sehat dengan makanan bergizi dan olahraga yang sesuai.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    condition = "Berat Badan Ideal";
    description =
      "Selamat! Berat badan Anda dalam kategori ideal. Tetap pertahankan pola makan sehat dan rutin berolahraga untuk menjaga kesehatan Anda.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    condition = "Kelebihan Berat Badan";
    description =
      "Anda berada dalam kategori kelebihan berat badan. Coba untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik untuk mencapai berat badan yang ideal.";
  } else {
    condition = "Obesitas";
    description =
      "Anda berada dalam kategori obesitas. Konsultasikan dengan profesional kesehatan Anda untuk merencanakan program penurunan berat badan yang sehat dan aman.";
  }

  bmiCondition.textContent = condition;
  bmiDescription.textContent = description;

  // Menampilkan blok hasil
  document.getElementById("bmi-result").style.display = "block";
});

// Event listener untuk tombol "Download Hasil"
document.getElementById("download").addEventListener("click", function () {
  const bmiValue = document.getElementById("bmi-value").textContent;
  const bmiCondition = document.getElementById("bmi-condition").textContent;
  const resultText = `BMI: ${bmiValue}\nKondisi: ${bmiCondition}`;

  // Membuat file teks yang bisa diunduh
  const blob = new Blob([resultText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "hasil_bmi.txt";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
});

