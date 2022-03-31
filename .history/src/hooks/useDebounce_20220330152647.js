import { useEffect, useState } from "react";

export default function useDebounce(initialValue = "", delay = 1000) {
  //
  const [debounceValue, setDebounceValue] = useState(initialValue);
  //Lí do dùng useEffect bởi vì ta sử dụng hàm setTimeout và khi sử dụng hàm setTimeout thì ta cần clear nó ra khỏi bộ nhớ sau khi sử dụng.
  useEffect(() => {
    // setLoading2(true);
    const timer = setTimeout(() => {
      setDebounceValue(initialValue);
      // setLoading2(false);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initialValue]);
  return debounceValue;
}
