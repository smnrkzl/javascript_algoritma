// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
//let cevap1 = ["Elma", "Armut", "Muz", "Çilek"];

// 2- Dizi kaç elemanlıdır?
/*let cevap2 = cevap1.length;
console.log(cevap2);*/

// 3- Dizinin ilk ve son elemanı nedir?
/*let cevap3 = cevap1[0];
let cevap3_2 = cevap1[cevap1.length - 1];
console.log(cevap3);
console.log(cevap3_2);*/

// 4- Elma dizinin bir elemanı mıdır?
/*console.log(cevap1.includes("Elma"));
console.log(cevap1.indexOf("Elma"));*/

// 5- Kiraz meyvesini listenin sonuna ekleyiniz
/*let cevap5 = cevap1.push("Kiraz");
cevap1[cevap1.length] = "Kiraz";*/

// 6- Dizinin son iki elemanını siliniz.
/*cevap1.pop();
cevap1.pop();*/

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrenncinin yaşını hesaplayınız.
/*
   Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
   Öğrenci 2: Ada Bilgi 2012 (80,80,90)
   Öğrenci 3: Ahmet Turan 2009 (60,60,70) 
*/
/*let cevap7_1 = ["Yiğit Bilgi", 2010, [70, 60, 80]];
let cevap7_2 = ["Ada Bilgi", 2012, [80, 80, 90]];
let cevap7_3 = ["Ahmet Turan", 2009, [60, 60, 70]];
let yas1 = new Date().getFullYear() - cevap7_1[1];
let yas2 = new Date().getFullYear() - cevap7_2[1];
let yas3 = new Date().getFullYear() - cevap7_3[1];*/

/*
-> Javascript'te dizi tanımlamak için köşeli parantezler kullanırız ve dizi içerisinde farkli tipte veriler olabilir.
-> Diğer birçok dilde olduğu gibi bu dilde de index numarası sıfırdan başlar.
DİZİ METOTLARI:
1-) concat(): Dizileri birleştirmek için kullanılır. Birden fazla diziyi tek bir dizi haline getirir.
2-) toString(): Tanımlanan değişken değerini string olarak döndürür.
3-) join(): Dizi içerisinde yer alan bütün elemanları birleştirerek döndürür.
4-) pop(): Dizideki son veriyi siler.
5-) push(): Dizinin sonuna eleman ekler.
6-) shift(): Dizideki ilk veriyi siler.
7-) unshift(): Dizinin başına istenilen veriyi ekler.
8-) splice(): Diziye hem eleman ekler hem de eleman siler.
9-) length(): String bir ifadenin uzunluğunu yani karakter sayısını döndürür.
10-) reverse(): Dizi elemanlarını tersten sıralar.
11-) sort(): String olan dizi elemanlarını alfabetik sıraya göre sıralar.
12-) indexOf(): Sorgulanan verinin dizide ilk görüldüğü index sırasını döndürür. Yani sorgulanan eleman birden fazla bulunuyorsa
                ilk görüldüğü index numarasını verir. Eğer bu eleman dizide bulunmuyorsa -1 sonucunu verir.
10.satır: Dizilerde index sıfırdan başlar demiştik yani 
          let cevap1 = ["Elma", "Armut", "Muz", "Çilek"] 
          0.eleman : Elma
          1.eleman : Armut 
          2.eleman : Muz 
          3.eleman : Çilek olur.
          length() metodu dizideki eleman sayısı olarak 4 ü verir bundan da 1 çıkarırsak index numarasına göre dizide son ifadeyi döndürür.. 
*/
