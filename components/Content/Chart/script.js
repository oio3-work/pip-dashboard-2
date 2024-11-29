import { reactive } from "vue";
const days = reactive([
  "25 Jan",
  "26 Jan",
  "27 Jan",
  "28 Jan",
  "29 Jan",
  "30 Jan",
  "31 Jan",
  "1 Feb",
  "2 Feb",
  "3 Feb",
  "4 Feb",
  "5 Feb",
]);

let numberOrderOfDaysCompelted = reactive([
  1000, 4500, 5000, 5800, 3500, 8500, 5000, 4500, 5000, 8500, 7500, 6500,
]);

let numberOrderOfDaysRejected = reactive([
    2000, 3050, 2000, 1050, 2000, 0, 4050, 2050, 4000, 250, 4000, 5000,
]);

export { days , numberOrderOfDaysCompelted , numberOrderOfDaysRejected }
