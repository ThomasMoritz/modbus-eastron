"use strict";
var index_1 = require("./index");
index_1.default({ baud: 2400, id: 1, dev: "/dev/ttyUSB0", model: 'SDM120CT' }).then(function (a) {
    console.log(a);
}).catch(function (err) {
    throw Error(err);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNCQUFxQixTQUVyQixDQUFDLENBRjZCO0FBRTlCLGVBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUM7SUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNsQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO0lBQ1QsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDcEIsQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZG0xMjBjdCBmcm9tIFwiLi9pbmRleFwiXG5cbnNkbTEyMGN0KHsgYmF1ZDogMjQwMCwgaWQ6IDEsIGRldjogXCIvZGV2L3R0eVVTQjBcIiwgbW9kZWw6ICdTRE0xMjBDVCcgfSkudGhlbigoYSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGEpXG59KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgdGhyb3cgRXJyb3IoZXJyKVxufSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
