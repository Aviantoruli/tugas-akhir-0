const list = {
    Jakarta: [
        {
            id: "Jakarta-0",
            nama: "Jakarta Medical Center Hospital",
            alamat: "Jl. Warung Buncit Raya No.15, RT.10/RW.5, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740",
            img: "data:image/jpeg;base64,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"
        },
        {
            id: "Jakarta-1",
            nama: "Jakarta Islamic Hospital",
            alamat: "Jl. Cemp. Putih Tengah I No.1, RT.11/RW.5, Cemp. Putih Tim., Kec. Cemp. Putih, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10510",
            img: "https://kfmap.asia/thumbs/photos/ID.JKT.HOS.JI1/ID.JKT.HOS.JI1_1.jpg"
        },
        {
            id: "Jakarta-2",
            nama: "Abdi Waluyo Hospital",
            alamat: "Jl. HOS. Cokroaminoto No.31-33, RT.1/RW.3, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350",
            img: "https://cms.sehatq.com/cdn-cgi/image/f=auto/public/img/hospital_thumb/rumah-sakit-abdi-waluyo-jakarta-pusat-HCFH00000079.jpg"
        },
        {
            id: "Jakarta-3",
            nama: "RS Cikini",
            alamat: "Jl. Raden Saleh Raya No.40, RT.12/RW.2, Cikini, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10330",
            img: "https://assets.pikiran-rakyat.com/crop/14x136:1823x1230/x/photo/2021/06/29/1232003087.jpg"
        },
        {
            id: "Jakarta-4",
            nama: "RS Bunda Jakarta",
            alamat: " Jl. Teuku Cik Ditiro 1 No.11, RT.8/RW.2, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350",
            img: "https://res.cloudinary.com/dk0z4ums3/image/upload/w_360,h_240,c_fill,dpr_2.0,f_auto/v1497423860/hospital_image/rsbunda.jpg.jpg"
        },
    ],
    Bekasi: [
        {
            id: "Bekasi-0",
            nama: "Bella Hospital Bekasi",
            alamat: "Jl. Ir. H. Juanda No.141, RT.001/RW.001, Duren Jaya, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17111",
            img: "https://www.rsbella.com/demo/uploads/gallery/thumb_image_20171209-020916.jpg"
        },
        {
            id: "Bekasi-1",
            nama: "Hermina Hospital Bekasi",
            alamat: "Jl. Kemakmuran No.39, RT.004/RW.003, Marga Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17141",
            img: "https://d1ojs48v3n42tp.cloudfront.net/personnels/415830_7-10-2020_21-58-17.jpeg"
        },
        {
            id: "Bekasi-2",
            nama: "Primaya Hospital Bekasi Barat",
            alamat: "Jl. KH. Noer Ali No.Kav. 17-18, RT.001/RW.009, Kayuringin Jaya, Kec. Bekasi Bar., Kota Bks, Jawa Barat 17144",
            img: "https://primayahospital.com/wp-content/uploads/2019/08/Bekasi-Utara.jpg.webp"
        },
        {
            id: "Bekasi-3",
            nama: "Siloam Hospitals Bekasi Timur",
            alamat: "Jl. Chairil Anwar No.27-36, RT.004/RW.009, Margahayu, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17113",
            img: "https://www.siloamhospitals.com/-/media/Siloam/Images/Slider/Hospital-Medika/Medika.JPG?h=490&la=en&w=920&hash=9D7CFF3A8186D9ABDB60C173CC73F66F719C2DBB"
        },
    ],
    Bogor: [
        {
            id: "Bogor-0",
            nama: "Rumah Sakit Azra Bogor",
            alamat: "Jl. Raya Pajajaran No.219, RT.02/RW.11, Bantarjati, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16153",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CPycDMwQJW2WdAjiDBUzXAs2xLwTBmO-GA&usqp=CAU"
        },
        {
            id: "Bogor-1",
            nama: "RS PMI Bogor",
            alamat: "Jl. Raya Pajajaran No.80, RT.02/RW.05, Tegallega, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16143",
            img: "https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/405590_13-9-2019_12-44-18.jpg"
        },
        {
            id: "Bogor-2",
            nama: "RS Hermina Bogor",
            alamat: "Jl. Ring Road I Kav Perumahan, Jl. Ring Road Taman Yasmin No.23, 25, 27, RT.08/RW.08, Curugmekar, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16113",
            img: "https://1.bp.blogspot.com/-VXxOQtDiHek/Xil2Z71x4EI/AAAAAAAAJDU/3FbsG8unA9sw4udqEM7PjsOc801gfWbjwCLcBGAsYHQ/w1280-h720-p-k-no-nu/RS%2BHermina%2BBogor%2B-%2BJadwal%2BPraktek%2BDokter.jpg"
        },
        {
            id: "Bogor-3",
            nama: "RSUD Kota Bogor",
            alamat: "Jl. DR. Sumeru No.120, RT.03/RW.20, Menteng, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16112",
            img: "https://img.beritasatu.com/cache/beritasatu/600x350-2/1587544095.jpg"
        },
    ],
    Bandung: [
        {
            id: "Bandung-0",
            nama: "Bandung Advent Hospital",
            alamat: "Jl. Cihampelas No.161, Cipaganti, Kecamatan Coblong, Kota Bandung, Jawa Barat 40131",
            img: "https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/512703_8-5-2020_12-12-16.jpeg"
        },
        {
            id: "Bandung-1",
            nama: "RSUD Bandung",
            alamat: "Jl. Rumah Sakit No.22, Pakemitan, Cinambo, Kota Bandung, Jawa Barat 45474",
            img: "https://jabarprov.go.id/rumahsakit/gambar/RSUD%20Kota%20Bandung%20Ujung%20Berung.png"
        },
        {
            id: "Bandung-2",
            nama: "Muhammadiyah Hospital Bandung",
            alamat: "Jl. K.H. Ahmad Dahlan No.53, Turangga, Kec. Lengkong, Kota Bandung, Jawa Barat 40264",
            img: "https://lh3.googleusercontent.com/proxy/KNAWHFEze3aP0vzI3kwzSQMKrijLcYi7BJut15ylJHrzghsbAFWdgqZETiGlOrLM2StbUo_sX7S4S5jJ1EE9VzG2CWhu7WnWVuxbqyu1E-qT2Jo18r6pzjbO"
        },
        {
            id: "Bandung-3",
            nama: "Santo Borromeus Hospital",
            alamat: "Jl. Ir. H. Juanda No.100, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132",
            img: "https://rsborromeus.com/wp-content/uploads/2017/02/EB.jpg"
        },
    ],
    Tangerang: [
        {
            id: "Tangerang-0",
            nama: "Primaya Hospital Tangerang",
            alamat: "Jl. MH. Thamrin No.3, RT.003/RW.001, Cikokol, Kec. Pinang, Kota Tangerang, Banten 15143",
            img: "https://1.bp.blogspot.com/-D9cys0AQerA/XylcVeefVbI/AAAAAAAAMqQ/XA5ocSHUtt44tW2OowUfudfQkAQiQ5S9gCLcBGAsYHQ/s1600/RS%2BPrimaya%2BAwal%2BBros%2BTangerang%2Bjadwal%2Bpraktek%2Bdokter.jpg"
        },
        {
            id: "Tangerang-1",
            nama: "RS EMC Tangerang",
            alamat: "Jl. KH Hasyim Ashari No.24, RT.001/RW.007, Buaran Indah, Kec. Tangerang, Kota Tangerang, Banten 15119",
            img: "https://res.cloudinary.com/dk0z4ums3/image/upload/w_360,h_240,c_fill,dpr_2.0,f_auto/v1585906852/hospital_image/34b8389db300_Gambar%20depan%20RS%20EMC%20Tangerang.jpg.jpg"
        },
        {
            id: "Tangerang-2",
            nama: "RS. Tiara Tangerang",
            alamat: "Jl. Beringin Raya No.3 - 5, RT.003/RW.008, Nusa Jaya, Kec. Karawaci, Kota Tangerang, Banten 15116",
            img: "https://www.rstiara.com/images/articles/gedung_rst_m.jpg"
        },
        {
            id: "Tangerang-3",
            nama: "Mayapada Hospital Tangerang ",
            alamat: "Modernland, Jl. Honoris Raya No.6, RT.001/RW.006, Klp. Indah, Kec. Tangerang, Kota Tangerang, Banten 15117",
            img: "https://www.jasaferrie.co.id/public/uploads/images/20190618133549-mhtg-web_gaswad.jpg"
        },
    ],
    Depok: [
        {
            id: "Depok-0",
            nama: "RS Permata Depok",
            alamat: "Jl. Raya Muchtar No.22, Sawangan Baru, Kec. Sawangan, Kota Depok, Jawa Barat 16511",
            img: "https://res.cloudinary.com/dk0z4ums3/image/upload/w_360,h_240,c_fill,dpr_2.0,f_auto/v1536825303/hospital_image/lantai2-kanan.JPG.jpg"
        },
        {
            id: "Depok-1",
            nama: "RS Hermina Depok",
            alamat: "Jl. Siliwangi No.50, Depok, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16436",
            img: "https://d1ojs48v3n42tp.cloudfront.net/provider_location_banner/29033_27-3-2020_15-49-15.jpg"
        },
        {
            id: "Depok-2",
            nama: "RS Harapan Depok",
            alamat: "Jl. Pemuda No.10, Depok, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16431",
            img: "https://2.bp.blogspot.com/-f2Bkl56krKs/W7SWm18c4OI/AAAAAAAAEA4/U-Gc_wUP9XoOrkpllqU6D7R14mv9O7PPgCK4BGAYYCw/s1600/RS%2BHarapan%2BDepok.jpg"
        },
        {
            id: "Depok-3",
            nama: "RS Universitas Indonesia",
            alamat: "Pondok Cina, Beji, Depok City, West Java 16424",
            img: "https://www.goodnewsfromindonesia.id/uploads/post/large-depok-kesehatan-rumah-sakit-universitas-indones-original-663a8a2f02eb507ff0c17a633638.jpg"
        },
    ]
};



const listRS = document.querySelector("#main-content")



const Navbar = document.getElementById("cari-RS")

Navbar.addEventListener("submit", function (event) {
    // var konten = document.getElementById("main-content");
    // while (konten.hasChildNodes()) {
    //     konten.removeChild(konten.firstChild);
    // }

    event.preventDefault()
    let list1 = list
    // for (const key in list) {
    let kota = document.getElementById("cari").value
    render(list, kota)

})


// function get() {
document.getElementById("add-hospital").addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(event.target)

    city = document.getElementById("input-city").value
    let obj = {}
    obj.id = `${city}-${list[city].length}-${Math.floor(Math.random() * 100)}`
    obj.nama = document.getElementById("input-rs").value
    obj.alamat = document.getElementById("input-alamat").value
    obj.img = document.getElementById("input-image").value
    console.log(city)
    list[city].push(obj)
    console.log(list)
    var konten = document.getElementById("main-content");
    // while (konten.hasChildNodes()) {
    //     konten.removeChild(konten.firstChild);
    // }
    render(list, city)
});
// }


function render(list, kota) {
    console.log(list, kota)
    var konten = document.getElementById("main-content");
    konten.innerHTML = "";
    // while (konten.hasChildNodes()) {
    //     konten.removeChild(konten.firstChild);
    // }
    for (const key in list) {
        if (kota == key) {
            // for (const key in list) {
            for (let i = 0; i < list[key].length; i++) {
                // if (hapus == list[key][i]["id"]) {
                //     // continue;
                // } else {
                    const col = document.createElement('div')
                    col.classList.add('col-3')
                    col.classList.add("mb-3")
                    col.style.height = "450px"
                    col.id = list[key][i].id
                    listRS.appendChild(col)
                    const card = document.createElement('div')
                    card.classList.add('card')
                    card.style.borderRadius = "20px"
                    card.width = 2000;
                    card.style.height = "450px";
                    col.appendChild(card)
                    var img = document.createElement("img");
                    img.style.borderRadius = "20px"
                    img.style.margin = "0 auto"
                    img.width = 300;
                    img.height = 200;
                    img.src = `${list[key][i].img}`;
                    card.appendChild(img);
                    const kartu = document.createElement('div')
                    kartu.classList.add("card-body")
                    // kartu.style.justifyContent = "center"
                    // kartu.classList.add("justify-content-center") 
                    kartu.style.margin = "0 auto"
                    card.appendChild(kartu)
                    const namaRS = document.createElement('h5')
                    namaRS.innerText = `${list[key][i].nama}`
                    namaRS.classList.add("card-title")
                    kartu.appendChild(namaRS)
                    const alamat = document.createElement('p')
                    alamat.innerText = `${list[key][i].alamat}`
                    alamat.classList.add('card-text')
                    kartu.appendChild(alamat)
                    const hapus = document.createElement("button")
                    hapus.id = `hapus-${list[key][i].id}`
                    // hapus.name = `${list[key][i].id}`
                    hapus.classList.add("btn")
                    hapus.classList.add("btn-primary")
                    hapus.style.justifyContent = "center"
                    // hapus.classList.add("justify-content-center")
                    hapus.innerText = "Delete"
                    kartu.appendChild(hapus)

                    console.log(list[key][i])
                    const btnHapus = document.getElementById(`hapus-${list[key][i].id}`)
                    btnHapus.addEventListener("click", function (event) {
                        console.log(list[key][i].id)
                        event.preventDefault()
                        // list[key] = []
                        let arr = [];
                        for (let j = 0; j < list[key].length; j++) {
                            
                            if (list[key][j]["id"] != list[key][i].id)  {
                                arr.push(list[key][j])
                            }                          
                        }
                        list[key]=arr;
                        render(list ,key)

                    

                    })
                // }
            }
        }
    }
}

// function del(){
// const btnHapus = document.getElementById("hapus")
// btnHapus.addEventListener("click", function (event) {
//     event.preventDefault()
//     hapus = document.getElementsById("hapus").name
//     render(list, hapus)

// })
// }




// const listRS = document.querySelector("#main-content")

// function render(list) {
//     for (const key in list) {
//         let  = list
//         for (let i = 0; i < list1[key].length; i++) {
//             const col = document.createElement('div')
//             col.classList.add('col')
//             listRS.appendChild(col)
//             const card = document.createElement('div')
//             card.classList.add('card')
//             col.appendChild(card)
//             var img = document.createElement("img");
//             img.width = 200;
//             img.src = `${list[key][i].img}`;
//             card.appendChild(img);
//             const kartu = document.createElement('div')
//             kartu.classList.add("card-body")
//             card.appendChild(kartu)
//             const namaRS = document.createElement('h5')
//             namaRS.innerText = `${list[key][i].nama}`
//             namaRS.classList.add("card-title")
//             kartu.appendChild(namaRS)
//             const alamat = document.createElement('p')
//             alamat.innerText = `${list[key][i].alamat}`
//             alamat.classList.add('card-text')
//             kartu.appendChild(alamat)
//         }
//     }
// }
// render(list)

// const Navbar = document.getElementById("cari-RS")

// Navbar.addEventListener("submit", function (event) {
//     var konten = document.getElementById("main-content");
//     while (konten.hasChildNodes()) {
//         konten.removeChild(konten.firstChild);
//     }

//     event.preventDefault()
//     let list1 = list
//     // for (const key in list) {
//         let kota = document.getElementById("cari").value
//         render(list, kota)
//         // console.log(kota)
//         // if (kota == key) {
//         //     // for (const key in list) {
//         //         for (let i = 0; i < list1[key].length; i++) {
//         //             const col = document.createElement('div')
//         //             col.classList.add('col')
//         //             listRS.appendChild(col)
//         //             const card = document.createElement('div')
//         //             card.classList.add('card')
//         //             col.appendChild(card)
//         //             var img = document.createElement("img");
//         //             img.width = 200;
//         //             img.src = `${list[key][i].img}`;
//         //             card.appendChild(img);
//         //             const kartu = document.createElement('div')
//         //             kartu.classList.add("card-body")
//         //             card.appendChild(kartu)
//         //             const namaRS = document.createElement('h5')
//         //             namaRS.innerText = `${list[key][i].nama}`
//         //             namaRS.classList.add("card-title")
//         //             kartu.appendChild(namaRS)
//         //             const alamat = document.createElement('p')
//         //             alamat.innerText = `${list[key][i].alamat}`
//         //             alamat.classList.add('card-text')
//         //             kartu.appendChild(alamat)
//         //         }
//         //     // }
//         // }
//     // }
// })


// // function get() {
//     document.getElementById("add-hospital").addEventListener("submit", function (event) {
//         event.preventDefault()
//         console.log(event.target)
//         let obj = {}
//         obj.id = key.length +1 ;
//         obj.nama = document.getElementById("input-rs").value
//         obj.img = document.getElementById("input-image").value
//         obj.alamat = document.getElementById("input-alamat").value
//         city = document.getElementById("input-city").value
//         console.log(city)
//         list[city].push(obj)
//         console.log(list)
//         var konten = document.getElementById("main-content");
//         while (konten.hasChildNodes()) {
//             konten.removeChild(konten.firstChild);
//         }
//         render(list, city)
//     });
// // }

// get()
// function render(list, kota) {
//     for (const key in list) {
//         if (kota == key) {
//             // for (const key in list) {
//                 for (let i = 0; i < list[key].length; i++) {
//                     const col = document.createElement('div')
//                     col.classList.add('col-3')
//                     col.id = list[key][i]["id"];
//                     listRS.appendChild(col)
//                     const card = document.createElement('div')
//                     card.classList.add('card')
//                     card.style.borderRadius = "20px"
//                     card.width = 2000;
//                     col.appendChild(card)
//                     var img = document.createElement("img");
//                     img.style.borderRadius ="20px"
//                     img.style.margin = "0 auto"
//                     img.width = 200;
//                     img.height = 200;
//                     img.src = `${list[key][i].img}`;
//                     card.appendChild(img);
//                     const kartu = document.createElement('div')
//                     kartu.classList.add("card-body")
//                     kartu.style.margin = "0 auto"
//                     card.appendChild(kartu)
//                     const namaRS = document.createElement('h5')
//                     namaRS.innerText = `${list[key][i].nama}`
//                     namaRS.classList.add("card-title")
//                     kartu.appendChild(namaRS)
//                     const alamat = document.createElement('p')
//                     alamat.innerText = `${list[key][i].alamat}`
//                     alamat.classList.add('card-text')
//                     kartu.appendChild(alamat)
//                     const hapus = document.createElement("a")
//                     hapus.id = "hapus"
//                     hapus.name = i
//                     hapus.classList.add("btn")
//                     hapus.classList.add("btn-primary")
//                     hapus.align = "center"
//                     hapus.innerText = "Delete"
//                     kartu.appendChild(hapus)
//             }
//         } 
//     }
// }


// // function del(){
//     document.getElementById("hapus").addEventListener("click", function(event){
//         let 
//     })
// // }



// // get()
// // del()

// // else if (kota != key && key == "Depok") {
// //     const col = document.createElement('div')
// //         col.classList.add('col')
// //         col.innerHTML = "OOps ! Daerah Belum terjangkau"
// //         listRS.appendChild(col)
// }