# Luwis Lim's Portfolio

## **Project 1: Transetter (Software Engineering)**
#### Team:
##### 1. Albert Lilian Thamson (2201754412)
##### 2. Daniel Santoso (2201756506)
##### 3. Kevin Gunawan (2201829981)
##### 4. Luwis Lim (2201761771)
##### 5. Rio Nagano (2201767232)
##### 6. Steven Odolf Yuwono (2201758045)


<br>
<b> Penjelasan Transetter </b>
<div> 
  <p align="justify">
     Transetter merupakan aplikasi berbasis <i>mobile apps</i>. Transetter adalah aplikasi yang dapat memilih rute perjalanan dari suatu tempat ke tempat lainnya.     <i>User</i> hanya perlu memasukkan 2 titik pada peta, yaitu titik awal dan titik tujuan. Lalu, <i>user</i> akan diminta untuk memilih alat transportasi sesuai    keinginannya. Setelah itu, Transetter akan menunjukkan beberapa rute yang tersedia. Selain menunjukkan beberapa rute, Transetter juga akan menampilkan kombinasi transportasi yang digunakan oleh setiap rutenya, perkiraan biaya, dan perkiraan waktu yang dibutuhkan untuk sampai di tujuan. Transetter juga memiliki fitur untuk mengurutkan rute-rute tersebut berdasarkan biaya dan waktu yang dibutuhkan untuk sampai di tujuan. <i>User</i> tinggal perlu memilih rute sesuai dengan kebutuhannya dan Transetter akan segera menampilkan detail dari rute yang  dipilih. Detail yang ditampilkan oleh Transetter, yaitu jenis-jenis transportasi, biaya perjalanan, waktu perjalanan, jadwal angkutan umum (TransJakarta, KRL, atau MRT). Kami berharap bahwa aplikasi ini dapat bekerja sama dengan Gojek, Grab, Gowes, ataupun dengan perusahaan transportasi lainnya.
  </p>
</div>

<br>
<b> Apa yang saya kerjakan </b>
<div>
  Pada proyek ini, saya bersama dengan tim saya melakukan <i>brain storming</i> dan presentasi bersama untuk mengembangkan aplikasi kami. Saya bersama dengan Daniel Santoso dan Steven Odolf Yuwono berencana unuk melanjutkan proyek ini.
</div>

<br>
<b> Berikut adalah prototype dari aplikasi kami </b> (Dibuat oleh Steven Odolf Yuwono - 2201758045)


| Splash Screen |  Main Menu | Saved Place | 
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img src="https://github.com/luwislim/Portfolio/blob/master/images/splash.jpg?raw=true" alt="Splash Screen">  |  <img src="https://github.com/luwislim/Portfolio/blob/master/images/menu.jpg?raw=true" alt="Main Menu"> | <img src="https://github.com/luwislim/Portfolio/blob/master/images/saved.jpg?raw=true" alt="Saved Place"> |

| Select Destination Screen |  Navigation Screen | Select Rute Screen  | 
|:-------------------------:|:-------------------------:|:-------------------------:|
|<img src="https://github.com/luwislim/Portfolio/blob/master/images/dest.jpg?raw=true" alt="Select Destination Screen">  |  <img src="https://github.com/luwislim/Portfolio/blob/master/images/navi.jpg?raw=true" alt="Navigation"> | <img src="https://github.com/luwislim/Portfolio/blob/master/images/select.jpg?raw=true" alt="Select Rute Screen"> |

<br><br>
## Project 2: Profanity Checker (Natural Language Processing)
#### Team:
##### 1. Albert Lilian Thamson (2201754412)
##### 2. Daniel Santoso (2201756506)
##### 3. Luwis Lim (2201761771)
##### 4. Steven Odolf Yuwono (2201758045)

<br>
<b> Penjelasan Profanity Checker </b>
<div> 
  <p align="justify">
    Profanity Checker merupakan sebuah pogram yang dapat mem-<i>filter</i> kata kata kasar atau kotor di media sosial maupun di dalam <i>games</i> dengan lebih baik menggunakan Artificial Intelligence. Kami sudah melakukan percobaan pada proyek ini, yang pertama menggunakan 70/30 <i>data split</i>, 80/20 <i>data split</i>, dan 90/10 <i>data split</i>. Dari percobaan tersebut kami menemukan bahwa 70/30 <i>data split</i> memiliki akurasi yang paling tinggi. Berikut adalah <i>screenshots</i> dari hasil yang kami dapatkan:
  </p>
  <br>
  NB: Mohon maaf jika terdapat kata-kata kasar pada gambar dibawah.

  <br>
  <b>70/30 Data Split</b><br>
  <img src="https://github.com/luwislim/Portfolio/blob/master/ProfanityChecker/data(split70+stopwords)/acc(70).png?raw=true" alt="70/30 Accuracy">
  <img src="https://github.com/luwislim/Portfolio/blob/master/ProfanityChecker/data(split70+stopwords)/percobaan(70).png?raw=true" alt="70/30 Test">
  <br>
  <b>80/20 Data Split</b><br>
  <img src="https://github.com/luwislim/Portfolio/blob/master/ProfanityChecker/data(split80+stopwords)/acc(80).png?raw=true" alt="80/20 Accuracy">
  <img src="https://github.com/luwislim/Portfolio/blob/master/ProfanityChecker/data(split80+stopwords)/percobaan(80).png?raw=true" alt="80/20 Test">
  <br>
  <b>90/10 Data Split</b><br>
  <img src="https://github.com/luwislim/Portfolio/blob/master/ProfanityChecker/data(split90+stopwords)/acc(90).png?raw=true" alt="90/10 Accuracy">
  <img src="https://github.com/luwislim/Portfolio/blob/master/ProfanityChecker/data(split90+stopwords)/percobaan(90).png?raw=true" alt="90/10 Test">
</div>

<b> Apa yang saya kerjakan </b>
<div>
  Pada proyek ini, saya bersama dengan tim saya melakukan <i>brain storming</i> untuk memaksimalkan fungsi dari program ini. Saya membantu tim dalam <i>cleaning datasets</i> sehingga data tersebut dapat digunakan untuk <i>training</i> dan <i>testing</i> pada program kami. <a href="https://github.com/luwislim/Portfolio/blob/master/ProfanityChecker/master.ipynb"><b>Profanity Checker Code</b></a>

  <br><br>
  Datasets proyek ini diambil dari <a href="https://www.kaggle.com/alvinf/data-komentar-video-youtube-toxic-ericko-lim">https://www.kaggle.com/alvinf/data-komentar-video-youtube-toxic-ericko-lim</a>
  <br><br>
  Referensi: <a href="https://github.com/vzhou842/profanity-check">https://github.com/vzhou842/profanity-check</a>
</div>

<br><br>
## Project 3: XtreamChaser (Human Computer Interaction)
#### Team:
##### 1. Alif Winanda
##### 2. Luwis Lim (2201761771)
##### 3. Steven Odolf Yuwono (2201758045)

<br>
<b> Penjelasan XtreamChaser </b>
<div> 
  <p align="justify">
    XtreamChaser adalah proyek dari mata kuliah Human Computer Interaction yang diminta untuk merancang sebuah <i>website</i> untuk sebuah <i>game</i>.
  </p>
</div>

<br>
<b> Apa yang saya kerjakan </b>
<div>
  Pada proyek ini, saya mengerjakan halaman Pre-Register bagian <a href="https://github.com/luwislim/Portfolio/blob/master/XtreamChaser/preregister.html"><b>HTML</b></a> dan <a href="https://github.com/luwislim/Portfolio/blob/master/XtreamChaser/css/register-style.css"><b>CSS</b></a>. Selain itu, saya juga membuat <i>blueprint</i> pada proyek ini. Berikut adalah <i>screenshot</i> halaman Pre-Register:
  <br><br>
  <img src="https://github.com/luwislim/Portfolio/blob/master/XtreamChaser/preregister.PNG?raw=true" alt="Pre-Register1">
  <br>
  <img src="https://github.com/luwislim/Portfolio/blob/master/XtreamChaser/preregister2.PNG?raw=true" alt="Pre-Register1">
</div>
