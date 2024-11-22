// دالة للبحث الثنائي في مصفوفة مرتبة
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true;  // العنصر موجود في المصفوفة
    } else if (arr[mid] < target) {
      left = mid + 1;  // العنصر في النصف الأيمن
    } else {
      right = mid - 1;  // العنصر في النصف الأيسر
    }
  }

  return false;  // العنصر غير موجود
};

// استخدام البحث الثنائي للتحقق من الصداقة
const TesttIfWeFreindOrno = async (id1, id2) => {
  try {
    const checkFreind = await axios.post(`/check/users/freind/${id1}`, {
      userId: id2
    });

    if (checkFreind && checkFreind.data) {
      // استخدام البحث الثنائي هنا إذا كانت بيانات الأصدقاء مرتبة
      const isFriend = binarySearch(checkFreind.data.myFreindInThisApp, id2);
      return isFriend ? "yes" : "no";  // إذا كان موجودًا في المصفوفة، فهو صديق
    } else {
      return "no";  // إذا كانت البيانات فارغة أو لا توجد صداقة
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
