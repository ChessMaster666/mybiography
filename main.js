const imgLinks = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1vi3JDO-tUFMRkdy4yz3jn9B9kQKEYuLVA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDoCyUA_0U82JXSi7XjL0BlHGPUCC_vSQow&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyWbeKcwVdUeqG7mzp0PXQM09HWGu3eKEdg&usqp=CAU'
];
let currentIndex = 0;
function setIntervalfunction() {
    document.getElementById('image2').src = imgLinks[currentIndex];
    currentIndex++;
    if (currentIndex >= imgLinks.length) {
        currentIndex = 0;
    }
}