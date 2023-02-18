import React from 'react'
import styles from '../style';

const Asupan = () => {
    return (
        <div className={`${styles.paragraph} bg-gradient-to-r from-sky-500 to-indigo-500`}>
            <div className='sm:px-16 px-8 text-white mt-10 py-5'>
                <h1 className={`${styles.heading2} text-white`}>Asupan nutrisi </h1>
                <h4 className='text-justify'>Pangan gizi seimbang berdasarkan Permenkes nomor 41 tahun 2014, antara lain ;</h4>
                <br />
            </div>

            <div className='bg-blue-100 sm:px-32 px-8'>
                <h2 className='xs:text-left text-center font-semibold text-[36px] leading-[48px] pt-5'>Bagi ibu hamil : </h2>
                <div className='text-justify md:px-0 px-0 md:py-5 py-0'>
                    <p>1. pada makan pagi terdiri dari makanan pokok 1 porsi, lauk hewani 1/2 porsi, lauk nabati 1/2 porsi, sayur 1 porsi,
                        buah 1 porsi, gula 1 porsi, lemak 1 porsi, dan air putih atau air mineral 2 porsi. Kemudian makanan selingan pagi yaitu makanan
                        pokok 1/2 porsi, buah 1 porsi, dan air minum 1 porsi.</p>
                    <p>1. Untuk makan siang terdiri dari makanan pokok 1 porsi, lauk hewani 1/2 porsi, lauk nabati 1/2 porsi, sayur 2 porsi, buah 1 porsi,
                        lemak 2 porsi, dan air putih 2 porsi. Untuk makanan selingan siang terdiri dari makanan pokok ½ porsi, gula 1 porsi, air putih 1
                        porsi.</p>
                    <p>Selanjutnya untuk makan malam terdiri dari makanan pokok 1 porsi, lauk hewani 1/2 porsi, lauk nabati 1/2 porsi, sayur 1 porsi,
                        buah 1 porsi, lemak 1 porsi, susu 1 porsi, air minum 2 porsi.</p>
                    <p>1 porsi makanan pokok seperti nasi sebanyak 100 gr atau 1 piring sedang dan dapat diganti dengan ubi jalar kuning 1 buah ukuran
                        sedang atau 135 gr.</p>
                    <p>Lauk hewani merupakan 1 porsi ikan pepes 45 gr atau 1 potong ukuran sedang. Lauk hewani bisa diganti dengan daging ayam 1 potong
                        ukuran sedang 40 gr.</p>
                    <p> Lauk nabati bisa dengan 1 porsi tempe goreng 50 gr atau 1 potong ukuran sedang. Lauk nabati dapat diganti dengan tahu 2 potong
                        ukuran sedang 100 gr.</p>
                    <p>Untuk sayuran bisa dengan 1 porsi sayur bayam 100 gr sebanyak 1 mangkok kecil atau dapat diganti dengan kacang panjang 1 gelas
                        sayuran 100 gr.</p>
                    <p>Kebutuhan buah bisa dengan 1 porsi pisang ambon 50 gr atau 1 buah pisang ukuran sedang, dapat diganti dengan jeruk manis 1 buah
                        ukuran sedang sebanyak 100 gr. Selanjutnya untuk minuman terdiri dari 1 porsi susu atau air putih satu gelas 250 ml.</p>
                    <br />
                </div>

                <h2 className='xs:text-left text-center font-semibold text-[36px] leading-[48px] pt-5'>Bagi bayi: </h2>
                <div className='text-justify md:px-0 px-0 md:py-5 py-0'>
                    <p> usia 0 – 24 bulan harus diberi ASI, bayi pada usia 6 – 9 bulan mulai diberi MP ASI berupa makanan lumat, pada usia
                        9 – 12 bulan diberi MPASI makanan lembek. Pada usia 12 – 24 bulan mulai diberi makanan keluarga.</p>
                    <p>Frekuensi makan bagi bayi per hari usia 6 – 9 bulan sebanyak 2 – 3 kali makanan lumat + 1 – 2 kali makanan selingan ditambah
                        ASI. Jumlah setiap kali makan terdiri dari 2 – 3 sendok makan penuh setiap kali makan dan tingkatkan secara perlahan sampai
                        setengah dari cangkir mangkok ukuran 250 ml tiap kali makan.</p>
                    <p>Pada usia 9 – 12 bulan diberi 3 – 4 kali makanan lembek + setengah kali makanan selingan ditambah ASI. Porsi makanan sebanyak
                        setengah mangkuk ukuran 250 ml.</p>
                    <p>Selanjutnya untuk bayi usia 12 – 24 bulan sebanyak 3 – 4 kali makanan keluarga ditambah 1 – 2 kali makanan selingan plus ASI.
                        Jumlah setiap kali makan sebanyak ¾ mangkuk ukuran 250 ml.</p>
                </div>
            </div>
        </div>
    )
}

export default Asupan