// دالة لحفظ البيانات في Local Storage
function saveData() {
    const pickupLocation = document.getElementById('pickupLocation').value;
    const deliveryLocation = document.getElementById('deliveryLocation').value;
    const deliveryTime = document.getElementById('deliveryTime').value;
    const orderCount = document.getElementById('orderCount').value;
    const orderValue = document.getElementById('orderValue').value;
    const dailyTotal = document.getElementById('dailyTotal').value;
    const totalOrdersValue = document.getElementById('totalOrdersValue').value;
    const commission = document.getElementById('commission').value;
    const totalMoney = document.getElementById('totalMoney').value;

    localStorage.setItem('pickupLocation', pickupLocation);
    localStorage.setItem('deliveryLocation', deliveryLocation);
    localStorage.setItem('deliveryTime', deliveryTime);
    localStorage.setItem('orderCount', orderCount);
    localStorage.setItem('orderValue', orderValue);
    localStorage.setItem('dailyTotal', dailyTotal);
    localStorage.setItem('totalOrdersValue', totalOrdersValue);
    localStorage.setItem('commission', commission);
    localStorage.setItem('totalMoney', totalMoney);

    alert('تم حفظ التعديلات بنجاح!');
}
// دالة تحميل بيانات المستخدم الشخصية من Local Storage
function loadPersonalInfo() {
    const firstName = localStorage.getItem('firstName') || '';
    const lastName = localStorage.getItem('lastName') || '';
    const address = localStorage.getItem('address') || '';
    const licenseNumber = localStorage.getItem('licenseNumber') || '';
    const vehicleType = localStorage.getItem('vehicleType') || '';
    const phoneNumber = localStorage.getItem('phoneNumber') || '';

    // عرض القيم في الصفحة
    document.getElementById('firstName').innerText = `الاسم الأول: ${firstName}`;
    document.getElementById('lastName').innerText = `اسم العائلة: ${lastName}`;
    document.getElementById('address').innerText = `العنوان: ${address}`;
    document.getElementById('licenseNumber').innerText = `رقم الرخصة: ${licenseNumber}`;
    document.getElementById('vehicleType').innerText = `نوع وسيلة النقل: ${vehicleType}`;
    document.getElementById('phoneNumber').innerText = `رقم الهاتف: ${phoneNumber}`;
}

// دالة لحفظ التعديلات في Local Storage
function saveData() {
    const pickupLocation = document.getElementById('pickupLocation').value;
    const deliveryLocation = document.getElementById('deliveryLocation').value;
    const deliveryTime = document.getElementById('deliveryTime').value;
    const orderCount = document.getElementById('orderCount').value;
    const orderValue = document.getElementById('orderValue').value;
    const dailyTotal = document.getElementById('dailyTotal').value;
    const totalOrdersValue = document.getElementById('totalOrdersValue').value;
    const commission = document.getElementById('commission').value;
    const totalMoney = document.getElementById('totalMoney').value;

    // تخزين القيم في Local Storage
    localStorage.setItem('pickupLocation', pickupLocation);
    localStorage.setItem('deliveryLocation', deliveryLocation);
    localStorage.setItem('deliveryTime', deliveryTime);
    localStorage.setItem('orderCount', orderCount);
    localStorage.setItem('orderValue', orderValue);
    localStorage.setItem('dailyTotal', dailyTotal);
    localStorage.setItem('totalOrdersValue', totalOrdersValue);
    localStorage.setItem('commission', commission);
    localStorage.setItem('totalMoney', totalMoney);

    alert('تم حفظ التعديلات بنجاح!');
}

// تحميل البيانات عند تحميل صفحة التحكم
document.addEventListener('DOMContentLoaded', loadPersonalInfo);

