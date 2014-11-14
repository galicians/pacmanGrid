'use strict';

/* Controllers */

var pacmanControllers = angular.module('pacmanControllers', []);

pacmanControllers.controller('gameController', ['$scope','Cell' ,'Corridor','Pacman', 'Wall', 'Dot', 'Ghost', 'Maze', 'Layout', function($scope, Cell, Corridor, Pacman, Wall, Dot, Ghost, Maze, Layout) {



setupGame()


$scope.maze.addPacman($scope.pacman)
$scope.pacman.location = 32
$scope.maze.place($scope.pacman, 32)
$scope.pacman.pointCount

setInterval(function(){
      $scope.ghost.move($scope.maze, new Dot, new Corridor)}, 500);

$scope.keypress = function(keyEvent) {
      var direction = keyEvent.keyIdentifier
      // console.log(direction)
      $scope.pacman.move(direction,$scope.maze,new Corridor)
}

function setupGame() {
      var cell = new Cell
      var corridor = new Corridor
      $scope.pacman = new Pacman
      $scope.ghost = new Ghost
      $scope.ghost.location = 434
      var wall = new Wall
      var dot = new Dot
      var ghost = new Ghost
      var maze = new Maze(30, 30)
      maze.generate(new Cell)
      populateMaze(maze)
      $scope.maze = maze
      $scope.maze.place($scope.ghost, 35)
}

function populateMaze(maze) {
maze.cells[0] = new Wall
maze.cells[1] = new Wall
maze.cells[2] = new Wall
maze.cells[3] = new Wall
maze.cells[4] = new Wall
maze.cells[5] = new Wall
maze.cells[6] = new Wall
maze.cells[7] = new Wall
maze.cells[8] = new Wall
maze.cells[9] = new Wall
maze.cells[10] = new Wall
maze.cells[11] = new Wall
maze.cells[12] = new Wall
maze.cells[13] = new Wall
maze.cells[14] = new Wall
maze.cells[15] = new Wall
maze.cells[16] = new Wall
maze.cells[17] = new Wall
maze.cells[18] = new Wall
maze.cells[19] = new Wall
maze.cells[20] = new Wall
maze.cells[21] = new Wall
maze.cells[22] = new Wall
maze.cells[23] = new Wall
maze.cells[24] = new Wall
maze.cells[25] = new Wall
maze.cells[26] = new Wall
maze.cells[27] = new Wall
maze.cells[28] = new Wall
maze.cells[29] = new Wall
maze.cells[30] = new Wall
maze.cells[59] = new Wall
maze.cells[60] = new Wall
maze.cells[62] = new Wall
maze.cells[63] = new Wall
maze.cells[64] = new Wall
maze.cells[66] = new Wall
maze.cells[67] = new Wall
maze.cells[68] = new Wall
maze.cells[69] = new Wall
maze.cells[70] = new Wall
maze.cells[71] = new Wall
maze.cells[72] = new Wall
maze.cells[74] = new Wall
maze.cells[75] = new Wall
maze.cells[77] = new Wall
maze.cells[78] = new Wall
maze.cells[79] = new Wall
maze.cells[80] = new Wall
maze.cells[81] = new Wall
maze.cells[82] = new Wall
maze.cells[84] = new Wall
maze.cells[85] = new Wall
maze.cells[86] = new Wall
maze.cells[87] = new Wall
maze.cells[89] = new Wall
maze.cells[90] = new Wall
maze.cells[92] = new Wall
maze.cells[102] = new Wall
maze.cells[104] = new Wall
maze.cells[107] = new Wall
maze.cells[117] = new Wall
maze.cells[119] = new Wall
maze.cells[120] = new Wall
maze.cells[122] = new Wall
maze.cells[124] = new Wall
maze.cells[126] = new Wall
maze.cells[128] = new Wall
maze.cells[129] = new Wall
maze.cells[130] = new Wall
maze.cells[132] = new Wall
maze.cells[134] = new Wall
maze.cells[135] = new Wall
maze.cells[137] = new Wall
maze.cells[139] = new Wall
maze.cells[140] = new Wall
maze.cells[141] = new Wall
maze.cells[142] = new Wall
maze.cells[143] = new Wall
maze.cells[145] = new Wall
maze.cells[147] = new Wall
maze.cells[149] = new Wall
maze.cells[150] = new Wall
maze.cells[154] = new Wall
maze.cells[156] = new Wall
maze.cells[158] = new Wall
maze.cells[160] = new Wall
maze.cells[162] = new Wall
maze.cells[165] = new Wall
maze.cells[167] = new Wall
maze.cells[169] = new Wall
maze.cells[175] = new Wall
maze.cells[179] = new Wall
maze.cells[180] = new Wall
maze.cells[181] = new Wall
maze.cells[182] = new Wall
maze.cells[184] = new Wall
maze.cells[186] = new Wall
maze.cells[187] = new Wall
maze.cells[188] = new Wall
maze.cells[190] = new Wall
maze.cells[192] = new Wall
maze.cells[194] = new Wall
maze.cells[195] = new Wall
maze.cells[197] = new Wall
maze.cells[199] = new Wall
maze.cells[201] = new Wall
maze.cells[202] = new Wall
maze.cells[203] = new Wall
maze.cells[205] = new Wall
maze.cells[207] = new Wall
maze.cells[208] = new Wall
maze.cells[209] = new Wall
maze.cells[210] = new Wall
maze.cells[214] = new Wall
maze.cells[222] = new Wall
maze.cells[224] = new Wall
maze.cells[227] = new Wall
maze.cells[229] = new Wall
maze.cells[231] = new Wall
maze.cells[233] = new Wall
maze.cells[235] = new Wall
maze.cells[239] = new Wall
maze.cells[240] = new Wall
maze.cells[242] = new Wall
maze.cells[243] = new Wall
maze.cells[244] = new Wall
maze.cells[246] = new Wall
maze.cells[247] = new Wall
maze.cells[248] = new Wall
maze.cells[249] = new Wall
maze.cells[250] = new Wall
maze.cells[252] = new Wall
maze.cells[254] = new Wall
maze.cells[255] = new Wall
maze.cells[257] = new Wall
maze.cells[259] = new Wall
maze.cells[260] = new Wall
maze.cells[261] = new Wall
maze.cells[263] = new Wall
maze.cells[265] = new Wall
maze.cells[267] = new Wall
maze.cells[269] = new Wall
maze.cells[270] = new Wall
maze.cells[274] = new Wall
maze.cells[276] = new Wall
maze.cells[280] = new Wall
maze.cells[285] = new Wall
maze.cells[293] = new Wall
maze.cells[295] = new Wall
maze.cells[297] = new Wall
maze.cells[299] = new Wall
maze.cells[300] = new Wall
maze.cells[302] = new Wall
maze.cells[304] = new Wall
maze.cells[306] = new Wall
maze.cells[308] = new Wall
maze.cells[310] = new Wall
maze.cells[312] = new Wall
maze.cells[313] = new Wall
maze.cells[314] = new Wall
maze.cells[315] = new Wall
maze.cells[316] = new Wall
maze.cells[317] = new Wall
maze.cells[319] = new Wall
maze.cells[323] = new Wall
maze.cells[325] = new Wall
maze.cells[327] = new Wall
maze.cells[329] = new Wall
maze.cells[321] = new Wall
maze.cells[330] = new Wall
maze.cells[332] = new Wall
maze.cells[334] = new Wall
maze.cells[336] = new Wall
maze.cells[338] = new Wall
maze.cells[340] = new Wall
maze.cells[349] = new Wall
maze.cells[351] = new Wall
maze.cells[353] = new Wall
maze.cells[355] = new Wall
maze.cells[357] = new Wall
maze.cells[359] = new Wall
maze.cells[360] = new Wall
maze.cells[362] = new Wall
maze.cells[364] = new Wall
maze.cells[366] = new Wall
maze.cells[368] = new Wall
maze.cells[370] = new Wall
maze.cells[372] = new Wall
maze.cells[373] = new Wall
maze.cells[374] = new Wall
maze.cells[375] = new Wall
maze.cells[376] = new Wall
maze.cells[377] = new Wall
maze.cells[379] = new Wall
maze.cells[381] = new Wall
maze.cells[385] = new Wall
maze.cells[387] = new Wall
maze.cells[389] = new Wall
maze.cells[390] = new Wall
maze.cells[392] = new Wall
maze.cells[394] = new Wall
maze.cells[396] = new Wall
maze.cells[398] = new Wall
maze.cells[400] = new Wall
maze.cells[402] = new Wall
maze.cells[407] = new Wall
maze.cells[409] = new Wall
maze.cells[411] = new Wall
maze.cells[413] = new Wall
maze.cells[415] = new Wall
maze.cells[417] = new Wall
maze.cells[419] = new Wall
maze.cells[420] = new Wall
maze.cells[422] = new Wall
maze.cells[428] = new Wall
maze.cells[430] = new Wall
maze.cells[432] = new Wall
maze.cells[437] = new Wall
maze.cells[441] = new Wall
maze.cells[443] = new Wall
maze.cells[447] = new Wall
maze.cells[449] = new Wall
maze.cells[450] = new Wall
maze.cells[452] = new Wall
maze.cells[453] = new Wall
maze.cells[454] = new Wall
maze.cells[455] = new Wall
maze.cells[456] = new Wall
maze.cells[458] = new Wall
maze.cells[460] = new Wall
maze.cells[462] = new Corridor
maze.cells[469] = new Wall
maze.cells[470] = new Wall
maze.cells[471] = new Wall
maze.cells[473] = new Wall
maze.cells[474] = new Wall
maze.cells[475] = new Wall
maze.cells[476] = new Wall
maze.cells[477] = new Wall
maze.cells[479] = new Wall
maze.cells[480] = new Wall
maze.cells[482] = new Wall
maze.cells[488] = new Wall
maze.cells[490] = new Wall
maze.cells[492] = new Wall
maze.cells[497] = new Wall
maze.cells[501] = new Wall
maze.cells[507] = new Wall
maze.cells[509] = new Wall
maze.cells[510] = new Wall
maze.cells[512] = new Wall
maze.cells[514] = new Wall
maze.cells[515] = new Wall
maze.cells[516] = new Wall
maze.cells[517] = new Wall
maze.cells[518] = new Wall
maze.cells[520] = new Wall
maze.cells[522] = new Wall
maze.cells[527] = new Wall
maze.cells[529] = new Wall
maze.cells[531] = new Wall
maze.cells[532] = new Wall
maze.cells[533] = new Wall
maze.cells[534] = new Wall
maze.cells[535] = new Wall
maze.cells[537] = new Wall
maze.cells[539] = new Wall
maze.cells[540] = new Wall
maze.cells[542] = new Wall
maze.cells[552] = new Wall
maze.cells[553] = new Wall
maze.cells[554] = new Wall
maze.cells[555] = new Wall
maze.cells[556] = new Wall
maze.cells[557] = new Wall
maze.cells[559] = new Wall
maze.cells[567] = new Wall
maze.cells[569] = new Wall
maze.cells[570] = new Wall
maze.cells[572] = new Wall
maze.cells[574] = new Wall
maze.cells[576] = new Wall
maze.cells[577] = new Wall
maze.cells[578] = new Wall
maze.cells[579] = new Wall
maze.cells[580] = new Wall
maze.cells[589] = new Wall
maze.cells[590] = new Wall
maze.cells[591] = new Wall
maze.cells[592] = new Wall
maze.cells[593] = new Wall
maze.cells[595] = new Wall
maze.cells[597] = new Wall
maze.cells[599] = new Wall
maze.cells[600] = new Wall
maze.cells[604] = new Wall
maze.cells[612] = new Wall
maze.cells[614] = new Wall
maze.cells[615] = new Wall
maze.cells[617] = new Wall
maze.cells[625] = new Wall
maze.cells[629] = new Wall
maze.cells[630] = new Wall
maze.cells[632] = new Wall
maze.cells[634] = new Wall
maze.cells[635] = new Wall
maze.cells[636] = new Wall
maze.cells[637] = new Wall
maze.cells[638] = new Wall
maze.cells[639] = new Wall
maze.cells[640] = new Wall
maze.cells[642] = new Wall
maze.cells[645] = new Wall
maze.cells[647] = new Wall
maze.cells[649] = new Wall
maze.cells[650] = new Wall
maze.cells[651] = new Wall
maze.cells[652] = new Wall
maze.cells[653] = new Wall
maze.cells[654] = new Wall
maze.cells[655] = new Wall
maze.cells[657] = new Wall
maze.cells[659] = new Wall
maze.cells[660] = new Wall
maze.cells[662] = new Wall
maze.cells[664] = new Wall
maze.cells[672] = new Wall
maze.cells[674] = new Wall
maze.cells[675] = new Wall
maze.cells[677] = new Wall
maze.cells[685] = new Wall
maze.cells[687] = new Wall
maze.cells[689] = new Wall
maze.cells[690] = new Wall
maze.cells[692] = new Wall
maze.cells[694] = new Wall
maze.cells[696] = new Wall
maze.cells[697] = new Wall
maze.cells[698] = new Wall
maze.cells[700] = new Wall
maze.cells[702] = new Wall
maze.cells[704] = new Wall
maze.cells[707] = new Wall
maze.cells[709] = new Wall
maze.cells[711] = new Wall
maze.cells[712] = new Wall
maze.cells[713] = new Wall
maze.cells[715] = new Wall
maze.cells[717] = new Wall
maze.cells[719] = new Wall
maze.cells[720] = new Wall
maze.cells[722] = new Wall
maze.cells[724] = new Wall
maze.cells[726] = new Wall
maze.cells[730] = new Wall
maze.cells[732] = new Wall
maze.cells[734] = new Wall
maze.cells[735] = new Wall
maze.cells[737] = new Wall
maze.cells[739] = new Wall
maze.cells[741] = new Wall
maze.cells[745] = new Wall
maze.cells[747] = new Wall
maze.cells[749] = new Wall
maze.cells[750] = new Wall
maze.cells[752] = new Wall
maze.cells[754] = new Wall
maze.cells[756] = new Wall
maze.cells[757] = new Wall
maze.cells[758] = new Wall
maze.cells[760] = new Wall
maze.cells[762] = new Wall
maze.cells[765] = new Wall
maze.cells[767] = new Wall
maze.cells[769] = new Wall
maze.cells[771] = new Wall
maze.cells[772] = new Wall
maze.cells[773] = new Wall
maze.cells[775] = new Wall
maze.cells[777] = new Wall
maze.cells[779] = new Wall
maze.cells[780] = new Wall
maze.cells[782] = new Wall
maze.cells[790] = new Wall
maze.cells[792] = new Wall
maze.cells[794] = new Wall
maze.cells[795] = new Wall
maze.cells[797] = new Wall
maze.cells[799] = new Wall
maze.cells[807] = new Wall
maze.cells[809] = new Wall
maze.cells[810] = new Wall
maze.cells[812] = new Wall
maze.cells[813] = new Wall
maze.cells[814] = new Wall
maze.cells[815] = new Wall
maze.cells[816] = new Wall
maze.cells[817] = new Wall
maze.cells[818] = new Wall
maze.cells[819] = new Wall
maze.cells[820] = new Wall
maze.cells[822] = new Wall
maze.cells[824] = new Wall
maze.cells[825] = new Wall
maze.cells[827] = new Wall
maze.cells[829] = new Wall
maze.cells[830] = new Wall
maze.cells[831] = new Wall
maze.cells[832] = new Wall
maze.cells[833] = new Wall
maze.cells[834] = new Wall
maze.cells[835] = new Wall
maze.cells[836] = new Wall
maze.cells[837] = new Wall
maze.cells[839] = new Wall
maze.cells[840] = new Wall
maze.cells[869] = new Wall
maze.cells[870] = new Wall
maze.cells[871] = new Wall
maze.cells[872] = new Wall
maze.cells[873] = new Wall
maze.cells[874] = new Wall
maze.cells[875] = new Wall
maze.cells[876] = new Wall
maze.cells[877] = new Wall
maze.cells[878] = new Wall
maze.cells[879] = new Wall
maze.cells[880] = new Wall
maze.cells[881] = new Wall
maze.cells[882] = new Wall
maze.cells[883] = new Wall
maze.cells[884] = new Wall
maze.cells[885] = new Wall
maze.cells[886] = new Wall
maze.cells[887] = new Wall
maze.cells[888] = new Wall
maze.cells[889] = new Wall
maze.cells[890] = new Wall
maze.cells[891] = new Wall
maze.cells[892] = new Wall
maze.cells[893] = new Wall
maze.cells[894] = new Wall
maze.cells[895] = new Wall
maze.cells[896] = new Wall
maze.cells[897] = new Wall
maze.cells[898] = new Wall
maze.cells[899] = new Wall

maze.cells[31] = new Dot
maze.cells[32] = new Dot
maze.cells[33] = new Dot
maze.cells[34] = new Dot
maze.cells[35] = new Dot
maze.cells[36] = new Dot
maze.cells[37] = new Dot
maze.cells[38] = new Dot
maze.cells[39] = new Dot
maze.cells[40] = new Dot
maze.cells[41] = new Dot
maze.cells[42] = new Dot
maze.cells[43] = new Dot
maze.cells[44] = new Dot
maze.cells[45] = new Dot
maze.cells[46] = new Dot
maze.cells[47] = new Dot
maze.cells[48] = new Dot
maze.cells[49] = new Dot
maze.cells[50] = new Dot
maze.cells[51] = new Dot
maze.cells[52] = new Dot
maze.cells[53] = new Dot
maze.cells[54] = new Dot
maze.cells[55] = new Dot
maze.cells[56] = new Dot
maze.cells[57] = new Dot
maze.cells[58] = new Dot
maze.cells[61] = new Dot
maze.cells[65] = new Dot
maze.cells[73] = new Dot
maze.cells[76] = new Dot
maze.cells[83] = new Dot
maze.cells[88] = new Dot
maze.cells[91] = new Dot
maze.cells[93] = new Dot
maze.cells[94] = new Dot
maze.cells[95] = new Dot
maze.cells[96] = new Dot
maze.cells[97] = new Dot
maze.cells[98] = new Dot
maze.cells[99] = new Dot
maze.cells[100] = new Dot
maze.cells[101] = new Dot
maze.cells[103] = new Dot
maze.cells[105] = new Dot
maze.cells[106] = new Dot
maze.cells[108] = new Dot
maze.cells[109] = new Dot
maze.cells[110] = new Dot
maze.cells[111] = new Dot
maze.cells[112] = new Dot
maze.cells[113] = new Dot
maze.cells[114] = new Dot
maze.cells[115] = new Dot
maze.cells[116] = new Dot
maze.cells[118] = new Dot
maze.cells[121] = new Dot
maze.cells[123] = new Dot
maze.cells[125] = new Dot
maze.cells[127] = new Dot
maze.cells[131] = new Dot
maze.cells[133] = new Dot
maze.cells[136] = new Dot
maze.cells[138] = new Dot
maze.cells[144] = new Dot
maze.cells[146] = new Dot
maze.cells[148] = new Dot
maze.cells[151] = new Dot
maze.cells[152] = new Dot
maze.cells[153] = new Dot
maze.cells[155] = new Dot
maze.cells[157] = new Dot
maze.cells[159] = new Dot
maze.cells[161] = new Dot
maze.cells[163] = new Dot
maze.cells[164] = new Dot
maze.cells[166] = new Dot
maze.cells[168] = new Dot
maze.cells[170] = new Dot
maze.cells[171] = new Dot
maze.cells[172] = new Dot
maze.cells[173] = new Dot
maze.cells[174] = new Dot
maze.cells[176] = new Dot
maze.cells[177] = new Dot
maze.cells[178] = new Dot
maze.cells[183] = new Dot
maze.cells[185] = new Dot
maze.cells[189] = new Dot
maze.cells[191] = new Dot
maze.cells[193] = new Dot
maze.cells[196] = new Dot
maze.cells[198] = new Dot
maze.cells[200] = new Dot
maze.cells[204] = new Dot
maze.cells[206] = new Dot
maze.cells[211] = new Dot
maze.cells[212] = new Dot
maze.cells[213] = new Dot
maze.cells[215] = new Dot
maze.cells[216] = new Dot
maze.cells[217] = new Dot
maze.cells[218] = new Dot
maze.cells[219] = new Dot
maze.cells[220] = new Dot
maze.cells[221] = new Dot
maze.cells[223] = new Dot
maze.cells[225] = new Dot
maze.cells[226] = new Dot
maze.cells[228] = new Dot
maze.cells[230] = new Dot
maze.cells[232] = new Dot
maze.cells[234] = new Dot
maze.cells[236] = new Dot
maze.cells[237] = new Dot
maze.cells[238] = new Dot
maze.cells[241] = new Dot
maze.cells[245] = new Dot
maze.cells[251] = new Dot
maze.cells[253] = new Dot
maze.cells[256] = new Dot
maze.cells[258] = new Dot
maze.cells[262] = new Dot
maze.cells[264] = new Dot
maze.cells[266] = new Dot
maze.cells[268] = new Dot
maze.cells[271] = new Dot
maze.cells[272] = new Dot
maze.cells[273] = new Dot
maze.cells[275] = new Dot
maze.cells[277] = new Dot
maze.cells[278] = new Dot
maze.cells[279] = new Dot
maze.cells[281] = new Dot
maze.cells[282] = new Dot
maze.cells[283] = new Dot
maze.cells[284] = new Dot
maze.cells[286] = new Dot
maze.cells[287] = new Dot
maze.cells[288] = new Dot
maze.cells[289] = new Dot
maze.cells[290] = new Dot
maze.cells[291] = new Dot
maze.cells[292] = new Dot
maze.cells[294] = new Dot
maze.cells[296] = new Dot
maze.cells[298] = new Dot
maze.cells[301] = new Dot
maze.cells[303] = new Dot
maze.cells[305] = new Dot
maze.cells[307] = new Dot
maze.cells[309] = new Dot
maze.cells[311] = new Dot
maze.cells[318] = new Dot
maze.cells[320] = new Dot
maze.cells[322] = new Dot
maze.cells[324] = new Dot
maze.cells[326] = new Dot
maze.cells[328] = new Dot
maze.cells[331] = new Dot
maze.cells[333] = new Dot
maze.cells[335] = new Dot
maze.cells[337] = new Dot
maze.cells[339] = new Dot
maze.cells[341] = new Dot
maze.cells[342] = new Dot
maze.cells[343] = new Dot
maze.cells[344] = new Dot
maze.cells[345] = new Dot
maze.cells[346] = new Dot
maze.cells[347] = new Dot
maze.cells[348] = new Dot
maze.cells[350] = new Dot
maze.cells[352] = new Dot
maze.cells[354] = new Dot
maze.cells[356] = new Dot
maze.cells[358] = new Dot
maze.cells[361] = new Dot
maze.cells[363] = new Dot
maze.cells[365] = new Dot
maze.cells[367] = new Dot
maze.cells[369] = new Dot
maze.cells[371] = new Dot
maze.cells[378] = new Dot
maze.cells[380] = new Dot
maze.cells[382] = new Dot
maze.cells[383] = new Dot
maze.cells[384] = new Dot
maze.cells[386] = new Dot
maze.cells[388] = new Dot
maze.cells[391] = new Dot
maze.cells[393] = new Dot
maze.cells[395] = new Dot
maze.cells[397] = new Dot
maze.cells[399] = new Dot
maze.cells[401] = new Dot
maze.cells[403] = new Corridor
maze.cells[404] = new Corridor
maze.cells[405] = new Corridor
maze.cells[406] = new Corridor
maze.cells[408] = new Dot
maze.cells[410] = new Dot
maze.cells[412] = new Dot
maze.cells[414] = new Dot
maze.cells[416] = new Dot
maze.cells[418] = new Dot
maze.cells[421] = new Dot
maze.cells[423] = new Dot
maze.cells[424] = new Dot
maze.cells[425] = new Dot
maze.cells[426] = new Dot
maze.cells[427] = new Dot
maze.cells[429] = new Dot
maze.cells[431] = new Dot
maze.cells[433] = new Corridor
maze.cells[434] = new Corridor
maze.cells[435] = new Corridor
maze.cells[436] = new Corridor
maze.cells[438] = new Dot
maze.cells[439] = new Dot
maze.cells[440] = new Dot
maze.cells[442] = new Dot
maze.cells[444] = new Dot
maze.cells[445] = new Dot
maze.cells[446] = new Dot
maze.cells[448] = new Dot
maze.cells[451] = new Dot
maze.cells[457] = new Dot
maze.cells[459] = new Dot
maze.cells[461] = new Dot
maze.cells[463] = new Corridor
maze.cells[464] = new Corridor
maze.cells[465] = new Corridor
maze.cells[466] = new Corridor
maze.cells[467] = new Corridor
maze.cells[468] = new Dot
maze.cells[472] = new Dot
maze.cells[478] = new Dot
maze.cells[481] = new Dot
maze.cells[483] = new Dot
maze.cells[484] = new Dot
maze.cells[485] = new Dot
maze.cells[486] = new Dot
maze.cells[487] = new Dot
maze.cells[489] = new Dot
maze.cells[491] = new Dot
maze.cells[493] = new Corridor
maze.cells[494] = new Corridor
maze.cells[495] = new Corridor
maze.cells[496] = new Corridor
maze.cells[498] = new Dot
maze.cells[499] = new Dot
maze.cells[500] = new Dot
maze.cells[502] = new Dot
maze.cells[503] = new Dot
maze.cells[504] = new Dot
maze.cells[505] = new Dot
maze.cells[506] = new Dot
maze.cells[508] = new Dot
maze.cells[511] = new Dot
maze.cells[513] = new Dot
maze.cells[519] = new Dot
maze.cells[521] = new Dot
maze.cells[523] = new Corridor
maze.cells[524] = new Corridor
maze.cells[525] = new Corridor
maze.cells[526] = new Corridor
maze.cells[528] = new Dot
maze.cells[530] = new Dot
maze.cells[536] = new Dot
maze.cells[538] = new Dot
maze.cells[541] = new Dot
maze.cells[543] = new Dot
maze.cells[544] = new Dot
maze.cells[545] = new Dot
maze.cells[546] = new Dot
maze.cells[547] = new Dot
maze.cells[548] = new Dot
maze.cells[549] = new Dot
maze.cells[550] = new Dot
maze.cells[551] = new Dot
maze.cells[558] = new Dot
maze.cells[560] = new Dot
maze.cells[561] = new Dot
maze.cells[562] = new Dot
maze.cells[563] = new Dot
maze.cells[564] = new Dot
maze.cells[565] = new Dot
maze.cells[566] = new Dot
maze.cells[568] = new Dot
maze.cells[571] = new Dot
maze.cells[573] = new Dot
maze.cells[575] = new Dot
maze.cells[581] = new Dot
maze.cells[582] = new Dot
maze.cells[583] = new Dot
maze.cells[584] = new Dot
maze.cells[585] = new Dot
maze.cells[586] = new Dot
maze.cells[587] = new Dot
maze.cells[588] = new Dot
maze.cells[594] = new Dot
maze.cells[596] = new Dot
maze.cells[598] = new Dot
maze.cells[601] = new Dot
maze.cells[602] = new Dot
maze.cells[603] = new Dot
maze.cells[605] = new Dot
maze.cells[606] = new Dot
maze.cells[607] = new Dot
maze.cells[608] = new Dot
maze.cells[609] = new Dot
maze.cells[610] = new Dot
maze.cells[611] = new Dot
maze.cells[613] = new Dot
maze.cells[616] = new Dot
maze.cells[618] = new Dot
maze.cells[619] = new Dot
maze.cells[620] = new Dot
maze.cells[621] = new Dot
maze.cells[622] = new Dot
maze.cells[623] = new Dot
maze.cells[624] = new Dot
maze.cells[626] = new Dot
maze.cells[627] = new Dot
maze.cells[628] = new Dot
maze.cells[631] = new Dot
maze.cells[633] = new Dot
maze.cells[641] = new Dot
maze.cells[643] = new Dot
maze.cells[644] = new Dot
maze.cells[646] = new Dot
maze.cells[648] = new Dot
maze.cells[656] = new Dot
maze.cells[658] = new Dot
maze.cells[661] = new Dot
maze.cells[663] = new Dot
maze.cells[665] = new Dot
maze.cells[666] = new Dot
maze.cells[667] = new Dot
maze.cells[668] = new Dot
maze.cells[669] = new Dot
maze.cells[670] = new Dot
maze.cells[671] = new Dot
maze.cells[673] = new Dot
maze.cells[676] = new Dot
maze.cells[678] = new Dot
maze.cells[679] = new Dot
maze.cells[680] = new Dot
maze.cells[681] = new Dot
maze.cells[682] = new Dot
maze.cells[683] = new Dot
maze.cells[684] = new Dot
maze.cells[686] = new Dot
maze.cells[688] = new Dot
maze.cells[691] = new Dot
maze.cells[693] = new Dot
maze.cells[695] = new Dot
maze.cells[699] = new Dot
maze.cells[701] = new Dot
maze.cells[703] = new Dot
maze.cells[705] = new Dot
maze.cells[706] = new Dot
maze.cells[708] = new Dot
maze.cells[710] = new Dot
maze.cells[714] = new Dot
maze.cells[716] = new Dot
maze.cells[718] = new Dot
maze.cells[721] = new Dot
maze.cells[723] = new Dot
maze.cells[725] = new Dot
maze.cells[727] = new Dot
maze.cells[728] = new Dot
maze.cells[729] = new Dot
maze.cells[731] = new Dot
maze.cells[733] = new Dot
maze.cells[736] = new Dot
maze.cells[738] = new Dot
maze.cells[740] = new Dot
maze.cells[742] = new Dot
maze.cells[743] = new Dot
maze.cells[744] = new Dot
maze.cells[746] = new Dot
maze.cells[748] = new Dot
maze.cells[751] = new Dot
maze.cells[753] = new Dot
maze.cells[755] = new Dot
maze.cells[759] = new Dot
maze.cells[761] = new Dot
maze.cells[763] = new Dot
maze.cells[764] = new Dot
maze.cells[766] = new Dot
maze.cells[768] = new Dot
maze.cells[770] = new Dot
maze.cells[774] = new Dot
maze.cells[776] = new Dot
maze.cells[778] = new Dot
maze.cells[781] = new Dot
maze.cells[783] = new Dot
maze.cells[784] = new Dot
maze.cells[785] = new Dot
maze.cells[786] = new Dot
maze.cells[787] = new Dot
maze.cells[788] = new Dot
maze.cells[789] = new Dot
maze.cells[791] = new Dot
maze.cells[793] = new Dot
maze.cells[796] = new Dot
maze.cells[798] = new Dot
maze.cells[800] = new Dot
maze.cells[801] = new Dot
maze.cells[802] = new Dot
maze.cells[803] = new Dot
maze.cells[804] = new Dot
maze.cells[805] = new Dot
maze.cells[806] = new Dot
maze.cells[808] = new Dot
maze.cells[811] = new Dot
maze.cells[821] = new Dot
maze.cells[823] = new Dot
maze.cells[826] = new Dot
maze.cells[828] = new Dot
maze.cells[838] = new Dot
maze.cells[841] = new Dot
maze.cells[842] = new Dot
maze.cells[843] = new Dot
maze.cells[844] = new Dot
maze.cells[845] = new Dot
maze.cells[846] = new Dot
maze.cells[847] = new Dot
maze.cells[848] = new Dot
maze.cells[849] = new Dot
maze.cells[850] = new Dot
maze.cells[851] = new Dot
maze.cells[852] = new Dot
maze.cells[853] = new Dot
maze.cells[854] = new Dot
maze.cells[855] = new Dot
maze.cells[856] = new Dot
maze.cells[857] = new Dot
maze.cells[858] = new Dot
maze.cells[859] = new Dot
maze.cells[860] = new Dot
maze.cells[861] = new Dot
maze.cells[862] = new Dot
maze.cells[863] = new Dot
maze.cells[864] = new Dot
maze.cells[865] = new Dot
maze.cells[866] = new Dot
maze.cells[867] = new Dot
maze.cells[868] = new Dot

}








 }]);
















