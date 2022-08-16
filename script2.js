// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

/*let sayi = Number(prompt("Sayı Giriniz:"))
if (sayi > 10 && sayi < 50){
    alert("Sayı 10 ile 50 arasında")
}else {
    alert("10 ile 50 arasında bir sayı giriniz.")
}*/

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
/*
let sayi2 = Number(prompt("Sayı giriniz:"));
if (sayi2 > 0 && sayi2 % 2 == 1) {
  alert("Sayı pozitif ve tek");
} else if (sayi2 > 0 && sayi2 % 2 == 0) {
  alert("Sayı pozitif ve çift");
} else {
  alert("Pozitif sayı giriniz.");
}*/

// 3- x, y, z sayılarının büyüklük karşılaştırmasını yapınız.
/*let x = prompt("Sayı giriniz :");
let y = Number(prompt("Sayı giriniz:"));
let z = Number(prompt("Sayı giriniz:"));
if (x > y && x > z) {
  alert("En Büyük Sayı: x");
} else if (y > x && y > z) {
  alert("En Büyük Sayı: y");
} else if (z > y && z > x) {
  alert("En Büyük Sayı: z");
} else {
  alert("Sayılar eşit.");
}*/

// 4- 2 vize(%40) ve 1 final(%60) notuna göre hesaplanan ortalama için;

/*let vize = Number(prompt("Vize notunuzu giriniz:"));
let final = Number(prompt("Final notunuzu giriniz:"));
let hesapvize = vize * 0.4;
let hesapfinal = final * 0.6;
let ortalama = (hesapfinal + hesapvize) / 2;*/

// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.

/*if (ortalama >= 50) {
  alert("GEÇTİNİZ");
} else {
  alert("KALDINIZ");
}*/

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

/*if (ortalama > 50 && final >= 50) {
  alert("GEÇTİNİZ");
} else {
  alert("KALDINIZ");
}

// c- Finalden 70 alındığında ortalam 50'nin altında olsa bile dersten geçilsin.

if (final >= 70 || ortalama >= 50) {
  alert("GEÇTİNİZ");
} else {
  alert("KALDINIZ");
}*/

/* Prompt komutu ile kullanıcıdan veri alırız ve aldığımız veri string tipinde olur. 
Yani prompt komutu ile iki sayı istesek ve bu aldığımız sayıları toplarsak şöyle bir sonuç ile 
karşılaşmış oluruz:
let sayi1 = prompt("sayı giriniz:") // girilen sayı: 4
let sayi2 = prompt("sayi giriniz") // girilen sayı: 5
let toplam = sayi1 + sayi2
console.log(toplam) // 45 
Görüldüğü gibi girdiğimiz sayıları toplamaz çünkü string tipinde görür bunları.
Bu durumun önüne geçebilmek için prompt komutundan önce Number yöntemini kullanırız.
*/
/*
Konrol edilmesini istediğimiz şartlar için mantıksal operatörleri kullanırız. 
Ve Operatörü (&&):
    true && true = true 
    true &6 false = false 
    false && false = false
Veya Operatörü (||):
    true || true = true 
    true || false = true 
    false || false = false    
*/
/*
Karşılaştırma Operatörleri
==   Eşitse
===  Hem değeri hem de türü eşitse
!=   Eşit değilse
<    Küçükse
<=   Küçük veya eşitse
>    Büyükse
>=   Büyük veya eşitse
*/
