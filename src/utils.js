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

module.exports = { colourizer };
