
(function() 
{
    console.log('Hola Mundo');
    setTimeout(() => {
    window.location.href = "https://up4u.up.edu.mx/user/auth/login";
    }, 5000);
    // Tamaño de la ventana del navegador
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    console.log(`Ancho de la ventana: ${windowWidth}px`);
    console.log(`Alto de la ventana: ${windowHeight}px`);

    // Tamaño total de la pantalla
    const screenWidth = screen.width;
    const screenHeight = screen.height;

    console.log(`Ancho de la pantalla: ${screenWidth}px`);
    console.log(`Alto de la pantalla: ${screenHeight}px`);

    // Información del navegador
    function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browserName = 'Desconocido';

    if (ua.indexOf('Firefox') > -1) {
        browserName = 'Mozilla Firefox';
    } else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) {
        browserName = 'Opera';
    } else if (ua.indexOf('Trident') > -1) {
        browserName = 'Microsoft Internet Explorer';
    } else if (ua.indexOf('Edge') > -1) {
        browserName = 'Microsoft Edge';
    } else if (ua.indexOf('Chrome') > -1) {
        browserName = 'Google Chrome';
    } else if (ua.indexOf('Safari') > -1) {
        browserName = 'Safari';
    }

    return browserName;
    }

    console.log(`Navegador: ${getBrowserInfo()}`);

    // Información del sistema operativo
    function getOS() {
    const platform = navigator.platform;
    const userAgent = navigator.userAgent;
    let os = 'Desconocido';

    if (platform.indexOf('Win') > -1) {
        os = 'Windows';
    } else if (platform.indexOf('Mac') > -1) {
        os = 'MacOS';
    } else if (platform.indexOf('Linux') > -1) {
        os = 'Linux';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
        os = 'iOS';
    }

    return os;
    }

    console.log(`Sistema Operativo: ${getOS()}`);

    function getDeviceBrand() {
        const userAgent = navigator.userAgent.toLowerCase();
        let brand = 'Desconocido';

        if (userAgent.includes('iphone')) {
            brand = 'Apple';
        } else if (userAgent.includes('ipad')) {
            brand = 'Apple';
        } else if (userAgent.includes('macintosh')) {
            brand = 'Apple';
        } else if (userAgent.includes('samsung')) {
            brand = 'Samsung';
        } else if (userAgent.includes('huawei')) {
            brand = 'Huawei';
        } else if (userAgent.includes('xiaomi')) {
            brand = 'Xiaomi';
        } else if (userAgent.includes('oneplus')) {
            brand = 'OnePlus';
        } else if (userAgent.includes('nokia')) {
            brand = 'Nokia';
        } else if (userAgent.includes('sony')) {
            brand = 'Sony';
        } else if (userAgent.includes('lg')) {
            brand = 'LG';
        } else if (userAgent.includes('htc')) {
            brand = 'HTC';
        } else if (userAgent.includes('motorola')) {
            brand = 'Motorola';
        }

        return brand;
    }

    console.log(`Marca del dispositivo: ${getDeviceBrand()}`);
})()