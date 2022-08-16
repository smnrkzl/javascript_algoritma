//let url = "https://www.sadikturan.com/";
//let kursAdi = "Komple Web Geliştirme Kursu";

// 1- url kaç karakterlidir?
/*let karakter = url.length;
console.log(karakter);*/

// 2- kursAdi kaç kelimeden oluşmaktadır?
/*let kurs = kursAdi.split(" ").length;
console.log(kurs);*/

// 3- url https ile mi başlıyor ?
/*let cevap3 = url.startsWith("https");
console.log(cevap3);*/

// 4- kursAdi içerisinde 'Eğitimi' kelimesi var mı?
/*let cevap4 = kursAdi.indexOf("Eğitimi");
console.log(cevap4);*/

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
/*let kursAdi1 = kursAdi.toLowerCase();
let kursAdi2 = kursAdi1.replaceAll(" ", "-");
console.log(url + kursAdi2);*/

// https://www.sadikturan.com/komple-web-gelistirme-kursu

/*
5.satır: length yöntemi ile karakter sayısını buluruz.
8.satır: kursAdi değişkeninde boşlukları split metodu ile ayırdık ardından length yöntemi ile kaç kelimeden oluştuğunu bulduk
         split metodu: metni parçalara böler ve bir diziye dönüştürür.
13.satır: startWith metodu, kontrol ettirdiğimiz kelime ile başlayıp başlamadığına bakar. Bu yöntemin tam tersi olan 
          endsWith metodu ise kontrol ettirdiğimiz kelime ile bitip bitmediğine bakar. Bool değer döndürür ve harf
          duyarlılığı vardır.
17.satır: indexOf metodu, parantez içinde yazdığımız kelimenin değişkende olup olmadığını kontrol eder. Bool(true/false)
          değer döndürmez. Kontrol ettiğimiz kelime yok ise -1 değerini döndürür. Harf duyarlılığı vardır.
21.satır: toLowerCase yöntemi ile dizeyi küçük harfe dönüştürür.
22.satır: replace metodu ile parantez içinde yazdığımız ilk ifadeyi diğer ikinci ifade ile değiştiririz.
          Yani kursAdi1 değişkenindeki boşlukların yerine '-' bu ifadeyi yazmış oluruz. Eğer replaceAll yazmazsak
          kursAdi bir değişkenindeki sadece ilk boşluğa müdahale edebiliriz. Tamamını değiştirmek için 'replaceAll'
          yazmamız gerekir.
 

*/
