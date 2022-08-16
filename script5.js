//let sayilar = [1, 5, 7, 15, 3, 25];
// 1- Sayılar listesindeki her bir elemanın karesini yazdırınız.
/*for (let i = 0; i < sayilar.length; i++) {
  document.writeln(sayilar[i] * sayilar[i]);
}*/

// 2- Sayılar listesindeki hangi sayılar 5'in katıdır?
/*for (let a = 0; a < sayilar.length; a++) {
  if (sayilar[a] % 5 == 0) {
    console.log(sayilar[a]);
  }
}*/

// 3- Sayılar listesindeki çift sayıların toplamını bulunuz.
/*let toplam = 0;
for (x = 0; x < sayilar.length; x++) {
  if (sayilar[x] % 2 == 0) {
    toplam += sayilar[x];
  }
}
console.log(toplam);*/

//let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

// 4- Urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
/*for (let i of urunler) {
  console.log(i.toUpperCase());
}*/

// 5- Urunler listesinde içinde samsung geçen kaç ürün vardır?

/*let sayi = 0;
for (let y of urunler) {
  if (y.includes("samsung")) {
    sayi += 1;
  }
}*/

let Ogrenciler = [
  { ad: "yiğit", soyad: "bilgi", notlar: [60, 70, 60] },
  { ad: "ada", soyad: "bilgi", notlar: [80, 70, 80] },
  { ad: "çınar", soyad: "turan", notlar: [10, 20, 60] },
];

// 6- Ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
for (let ogrenci of Ogrenciler) {
  let not_toplam = 0;
  let ortalama = 0;
  let adet = 0;
  for (let not of ogrenci.notlar) {
    not_toplam += not;
    adet++;
  }
  ortalama = not_toplam / adet;
  console.log(
    ` $(ogrenci.ad) $(orenci.soyad) isimli öğrencimin not ortalaması : $(ortalama).`
  );
  if (ortalama >= 50) {
    console.log("başarılı");
  } else {
    console.log("başarısız");
  }
}

// 7- Tüm öğrencilerin not ortalaması kaçtır?
