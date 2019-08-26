const colourizer = {
  bold(string) {
    return "\x1b[1m" + string + "\x1b[0m";
  },

  underline(string) {
    return "\x1b[4m" + string + "\x1b[0m";
  },

  red(string) {
    return "\x1b[31m" + string + "\x1b[0m";
  },

  green(string) {
    return "\x1b[32m" + string + "\x1b[0m";
  },

  blue(string) {
    return "\x1b[34m" + string + "\x1b[0m";
  },

  bigBlue(string) {
    return "\x1b[4m" + "\x1b[1m" + "\x1b[34m" + string + "\x1b[0m";
  }
};

const parseDate = req => {
  const { date } = req.params;
  const oneDay = 1000 * 60 * 60 * 24;
  let dateObj = new Date(date);
  let year = dateObj.getFullYear();
  let d0 = new Date(year, 0, 0);
  let diff = dateObj - d0;
  let doy = Math.floor(diff / oneDay);
  console.log(
    "Date was parsed such that DOY=" + doy + ", and year=" + year + "."
  );
  return { doy, year };
};

module.exports = { colourizer, parseDate };
