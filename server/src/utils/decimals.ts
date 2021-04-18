  
  export const countDecimals = (value: number | null | undefined): number | null => {
    if (!value) return null;
    if (Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0;
  };