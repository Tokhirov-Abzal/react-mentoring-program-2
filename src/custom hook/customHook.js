export function useSort() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (toggle) {
      data.sort(
        (a, b) =>
          Number(b.release_date.split("-")[0]) -
          Number(a.release_date.split("-")[0])
      );
    } else {
      data.sort(
        (a, b) =>
          Number(a.release_date.split("-")[0]) -
          Number(b.release_date.split("-")[0])
      );
    }
  }, [toggle]);

  return setToggle;
}
