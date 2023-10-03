function checkCats(CatsTuti, CatsNining) {
    // variabel dibawah untuk membuat salinan array dengan spread operator dan disimpan di variabel dibawah
    const TutiCopy = [...CatsTuti];

    TutiCopy.shift(); //menghapus index pertama atau 0
    TutiCopy.pop(); //menghapus index terakhir 

    // variabel dibawah untuk menggabungkan array tuti dan nining
    const dataGabung = [...TutiCopy,...CatsNining];

    // ini kata chatgpt di loop gk paham
    for(let i = 1; i < dataGabung.length; i++) {
        if (dataGabung[i] >= 3){
            console.log(`Kucing nomor ${i + 1} adalah kucing dewasa, dan berusia ${dataGabung[i]} tahun`);
        }else {
            console.log(`Kucing nomor ${i + 1} masih anak-anak`);
        }
    }
}

// ini data 1
const dataTuti1 = [3,5,2,12,7];
const dataNining1 = [4,1,15,6,5];
console.log("data uji 1: ");
checkCats(dataTuti1, dataNining1);

// ini data 2
const dataTuti2 = [9,16,6,8,3];
const dataNining2 = [10,5,6,1,4];
console.log("data uji 2: ");
checkCats(dataTuti2, dataNining2);
