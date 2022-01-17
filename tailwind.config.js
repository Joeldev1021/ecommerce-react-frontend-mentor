module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "vary-blue": "hsl(220, 13%, 13%)",
        "dark-blue": "hsl(219, 9%, 45%)",
        "grayish-blue": "hsl(220, 14%, 75%)",
        "light-gray": " hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)",
        black2: "rgba(0, 0, 0, 0.603)"
      }
    },
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"]
    }
  },
  plugins: []
};
