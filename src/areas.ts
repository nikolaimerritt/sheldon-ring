export interface Boss {
  id: number
  name: string
  defeated: boolean
}

export interface Area {
  location: string
  bosses: Boss[]
}

export const Areas: Area[] = [
  {
    location: 'Limgrave',
    bosses: [
      { id: 4994725, name: 'Beastman of Farum Azula', defeated: false },
      { id: 6607428, name: 'Bell Bearing Hunter', defeated: false },
      { id: 7803610, name: 'Black Knife Assassin', defeated: false },
      { id: 560707, name: 'Bloodhound Knight Darriwil', defeated: false },
      { id: 5314315, name: 'Crucible Knight', defeated: false },
      { id: 6226442, name: 'Deathbird', defeated: false },
      { id: 9069998, name: 'Demi-Human Chief', defeated: false },
      { id: 4628858, name: 'Erdtree Burial Watchdog (Stormfoot Catacombs)', defeated: false },
      { id: 3033939, name: 'Flying Dragon Agheel', defeated: false },
      { id: 7039740, name: 'Godrick the Grafted', defeated: false },
      { id: 5359316, name: 'Grafted Scion', defeated: false },
      { id: 7544489, name: 'Grave Warden Duelist', defeated: false },
      { id: 2795446, name: 'Guardian Golem', defeated: false },
      { id: 7054345, name: 'Mad Pumpkin Head', defeated: false },
      { id: 2730747, name: 'Margit, the Fell Omen', defeated: false },
      { id: 32221, name: "Night's Cavalry", defeated: false },
      { id: 5907050, name: 'Patches', defeated: false },
      { id: 6066925, name: 'Soldier of Godrick', defeated: false },
      { id: 7228566, name: 'Stonedigger Troll', defeated: false },
      { id: 73235, name: 'Tibia Mariner', defeated: false },
      { id: 4470487, name: 'Tree Sentinel', defeated: false },
      { id: 816157, name: 'Ulcerated Tree Spirit', defeated: false },
    ],
  },
  {
    location: 'Weeping Peninsula',
    bosses: [
      { id: 1693556, name: 'Ancient Hero of Zamor', defeated: false },
      { id: 8524938, name: 'Cemetery Shade', defeated: false },
      { id: 844469, name: 'Deathbird', defeated: false },
      { id: 4534095, name: 'Erdtree Avatar', defeated: false },
      { id: 5726038, name: "Erdtree Burial Watchdog (Impaler's Catacombs)", defeated: false },
      { id: 3039124, name: 'Leonine Misbegotten', defeated: false },
      { id: 9165864, name: 'Miranda the Blighted Bloom', defeated: false },
      { id: 9087795, name: "Night's Cavalry", defeated: false },
      { id: 6104726, name: 'Runebear', defeated: false },
      { id: 481014, name: 'Scaly Misbegotten', defeated: false },
    ],
  },
  {
    location: 'Liurnia of the Lakes',
    bosses: [
      { id: 2002243, name: 'Adan, Thief of Fire', defeated: false },
      { id: 9383361, name: 'Alecto, Black Knife Ringleader', defeated: false },
      { id: 3326469, name: 'Bell Bearing Hunter', defeated: false },
      { id: 1218708, name: 'Black Knife Assassin', defeated: false },
      { id: 4025200, name: 'Bloodhound Knight', defeated: false },
      { id: 924928, name: 'Bols, Carian Knight', defeated: false },
      { id: 6934488, name: 'Cemetery Shade', defeated: false },
      { id: 1698778, name: 'Cleanrot Knight', defeated: false },
      { id: 1382582, name: 'Crystalian', defeated: false },
      { id: 3078437, name: 'Crystalian Spear & Crystalian Staff (Duo)', defeated: false },
      { id: 3622290, name: 'Death Rite Bird', defeated: false },
      { id: 3150887, name: 'Deathbird', defeated: false },
      { id: 1591517, name: 'Erdtree Avatar (Liurnia Northeast)', defeated: false },
      { id: 2613666, name: 'Erdtree Avatar (Liurnia Southwest)', defeated: false },
      { id: 9006374, name: 'Erdtree Burial Watchdog', defeated: false },
      { id: 8996589, name: 'Glintstone Dragon Adula', defeated: false },
      { id: 3383378, name: 'Glintstone Dragon Smarag', defeated: false },
      { id: 5692031, name: 'Magma Wyrm Makar', defeated: false },
      { id: 6121866, name: "Night's Cavalry (Liurnia North)", defeated: false },
      { id: 8498593, name: "Night's Cavalry (Liurnia South)", defeated: false },
      { id: 7934879, name: 'Omenkiller', defeated: false },
      { id: 336247, name: 'Onyx Lord', defeated: false },
      { id: 253394, name: 'Red Wolf of Radagon', defeated: false },
      { id: 1047212, name: 'Rennala, Queen of the Full Moon', defeated: false },
      { id: 5872206, name: 'Royal Knight Loretta', defeated: false },
      { id: 5001025, name: 'Royal Revenant', defeated: false },
      { id: 2379676, name: 'Spirit-Caller Snail', defeated: false },
      { id: 5008906, name: 'Tibia Mariner', defeated: false },
    ],
  },
  {
    location: 'Ainsel River',
    bosses: [{ id: 1029131, name: 'Dragonkin Soldier of Nokstella', defeated: false }],
  },
  {
    location: 'Siofra River',
    bosses: [
      { id: 7048575, name: 'Ancestor Spirit', defeated: false },
      { id: 8812353, name: 'Dragonkin Soldier', defeated: false },
      { id: 3983986, name: 'Mohg, Lord of Blood', defeated: false },
    ],
  },
  {
    location: 'Caelid',
    bosses: [
      { id: 6227881, name: 'Cemetery Shade', defeated: false },
      { id: 5317780, name: "Commander O'Neil", defeated: false },
      { id: 3350386, name: 'Crucible Knight & Misbegotten Warrior', defeated: false },
      { id: 3814593, name: 'Death Rite Bird', defeated: false },
      { id: 5762731, name: 'Decaying Ekzykes', defeated: false },
      { id: 6445649, name: 'Erdtree Burial Watchdog (Duo)', defeated: false },
      { id: 676692, name: 'Fallingstar Beast', defeated: false },
      { id: 9003020, name: 'Frenzied Duelist', defeated: false },
      { id: 798273, name: 'Mad Pumpkin Heads', defeated: false },
      { id: 5544221, name: 'Magma Wyrm', defeated: false },
      { id: 4172550, name: "Night's Cavalry (Caelid)", defeated: false },
      { id: 6101489, name: 'Nox Swordstress & Nox Priest', defeated: false },
      { id: 6174356, name: 'Putrid Avatar', defeated: false },
      { id: 449500, name: 'Starscourge Radahn', defeated: false },
    ],
  },
  {
    location: 'Altus Plateau',
    bosses: [
      { id: 6446312, name: 'Ancient Dragon Lansseax', defeated: false },
      { id: 5450336, name: 'Ancient Hero of Zamor', defeated: false },
      { id: 8816074, name: "Black Knife Assassin (Sage's Cave)", defeated: false },
      { id: 732962, name: "Black Knife Assassin (Sainted Hero's Grave)", defeated: false },
      { id: 9971477, name: 'Crystalian Spear & Crystalian Ringblade', defeated: false },
      { id: 8126026, name: 'Demi-Human Queen Gilika', defeated: false },
      { id: 526963, name: 'Elemer of the Briar', defeated: false },
      { id: 1672100, name: 'Erdtree Burial Watchdog', defeated: false },
      { id: 63339, name: 'Fallingstar Beast', defeated: false },
      { id: 2564271, name: 'Godefroy The Grafted', defeated: false },
      { id: 6650132, name: 'Godskin Apostle', defeated: false },
      { id: 2866919, name: 'Necromancer Garris', defeated: false },
      { id: 3848339, name: "Night's Cavalry", defeated: false },
      { id: 562386, name: 'Omenkiller & Miranda the Blighted Bloom', defeated: false },
      { id: 3670848, name: 'Perfumer Tricia & Misbegotten Warrior', defeated: false },
      { id: 1301404, name: 'Sanguine Noble', defeated: false },
      { id: 7637522, name: 'Stonedigger Troll', defeated: false },
      { id: 1566658, name: 'Tibia Mariner', defeated: false },
      { id: 9152752, name: 'Tree Sentinel (Duo)', defeated: false },
      { id: 3357113, name: 'Wormface', defeated: false },
    ],
  },
  {
    location: 'Nokron, Eternal City',
    bosses: [
      { id: 371582, name: 'Mimic Tear', defeated: false },
      { id: 1172250, name: 'Regal Ancestor Spirit', defeated: false },
      { id: 6232986, name: 'Valiant Gargoyle & Valiant Gargoyle (Twinblade)', defeated: false },
    ],
  },
  {
    location: 'Deeproot Depths',
    bosses: [
      { id: 2654728, name: 'Crucible Knight Siluria', defeated: false },
      { id: 5599237, name: "Fia's Champions", defeated: false },
      { id: 4863699, name: 'Lichdragon Fortissax', defeated: false },
    ],
  },
  {
    location: 'Capital Outskirts',
    bosses: [
      { id: 5014785, name: 'Bell Bearing Hunter', defeated: false },
      { id: 6361176, name: 'Crucible Knight & Crucible Knight Ordovis', defeated: false },
      { id: 1348806, name: 'Deathbird', defeated: false },
      { id: 4855613, name: 'Draconic Tree Sentinel', defeated: false },
      { id: 3222525, name: 'Fell Twins', defeated: false },
      { id: 5911000, name: 'Grave Warden Duelist', defeated: false },
      { id: 9881663, name: 'Onyx Lord', defeated: false },
    ],
  },
  {
    location: 'Mt. Gelmir',
    bosses: [
      { id: 2899496, name: 'Abductor Virgins (Duo)', defeated: false },
      { id: 506095, name: 'Demi-Human Queen Maggie', defeated: false },
      { id: 6373211, name: 'Demi-Human Queen Margot', defeated: false },
      { id: 4350003, name: 'Full-Grown Fallingstar Beast', defeated: false },
      { id: 1506519, name: 'God-Devouring Serpent / Rykard, Lord of Blasphemy', defeated: false },
      { id: 9524582, name: 'Godskin Noble', defeated: false },
      { id: 5030045, name: 'Kindred of Rot (Duo)', defeated: false },
      { id: 3448063, name: 'Magma Wyrm (Fort Laiedd)', defeated: false },
      { id: 3287527, name: 'Red Wolf of the Champion', defeated: false },
      { id: 3460206, name: 'Ulcerated Tree Spirit', defeated: false },
    ],
  },
  {
    location: 'Lake of Rot',
    bosses: [
      { id: 9143620, name: 'Astel, Naturalborn of the Void', defeated: false },
      { id: 9161476, name: 'Dragonkin Soldier', defeated: false },
    ],
  },
  {
    location: 'Dragonbarrow',
    bosses: [
      { id: 9605942, name: 'Battlemage Hugues', defeated: false },
      { id: 351667, name: 'Beastman of Farum Azula (Duo)', defeated: false },
      { id: 1460142, name: 'Bell Bearing Hunter', defeated: false },
      { id: 9186741, name: 'Black Blade Kindred ', defeated: false },
      { id: 7000877, name: 'Cleanrot Knight (Duo)', defeated: false },
      { id: 6481702, name: 'Flying Dragon Greyll', defeated: false },
      { id: 8140660, name: 'Godskin Apostle', defeated: false },
      { id: 1578706, name: "Night's Cavalry (Dragonbarrow)", defeated: false },
      { id: 4009912, name: 'Putrid Avatar', defeated: false },
      { id: 4158353, name: 'Putrid Crystalian Trio', defeated: false },
      { id: 7747315, name: 'Putrid Tree Spirit', defeated: false },
    ],
  },
  {
    location: 'Leyndell, Royal Capital',
    bosses: [
      { id: 3467137, name: 'Esgar, Priest of Blood', defeated: false },
      { id: 6246922, name: 'Godfrey, First Elden Lord', defeated: false },
      { id: 6427368, name: 'Mohg, the Omen', defeated: false },
      { id: 7791977, name: 'Morgott, the Omen King', defeated: false },
    ],
  },
  {
    location: 'Forbidden Lands',
    bosses: [
      { id: 7929016, name: 'Black Blade Kindred', defeated: false },
      { id: 1927634, name: "Night's Cavalry", defeated: false },
      { id: 7287463, name: 'Stray Mimic Tear', defeated: false },
    ],
  },
  {
    location: 'Mountaintops of the Giants',
    bosses: [
      { id: 6842259, name: 'Ancient Hero of Zamor', defeated: false },
      { id: 5364711, name: 'Borealis the Freezing Fog', defeated: false },
      { id: 504184, name: 'Commander Niall', defeated: false },
      { id: 9484315, name: 'Death Rite Bird', defeated: false },
      { id: 997835, name: 'Erdtree Avatar', defeated: false },
      { id: 5417604, name: 'Fire Giant', defeated: false },
      {
        id: 4245599,
        name: 'Godskin Apostle and Godskin Noble (Spiritcaller Snail)',
        defeated: false,
      },
      { id: 5385773, name: 'Ulcerated Tree Spirit', defeated: false },
      { id: 4051386, name: 'Vyke, Knight of the Roundtable', defeated: false },
    ],
  },
  {
    location: 'Consecrated Snowfield',
    bosses: [
      { id: 4387886, name: 'Astel, Stars of Darkness', defeated: false },
      { id: 723408, name: 'Death Rite Bird', defeated: false },
      { id: 4553772, name: 'Great Wyrm Theodorix', defeated: false },
      { id: 553969, name: 'Misbegotten Crusader', defeated: false },
      { id: 6953056, name: "Night's Cavalry (Duo)", defeated: false },
      { id: 3510764, name: 'Putrid Avatar', defeated: false },
      { id: 6833309, name: 'Putrid Grave Warden Duelist', defeated: false },
    ],
  },
  {
    location: "Miquella's Haligtree",
    bosses: [
      { id: 6557906, name: 'Loretta, Knight of the Haligtree', defeated: false },
      { id: 3991670, name: 'Malenia, Blade of Miquella', defeated: false },
    ],
  },
  {
    location: 'Crumbling Farum Azula',
    bosses: [
      { id: 966275, name: 'Beast Clergyman / Maliketh, the Black Blade', defeated: false },
      { id: 6548009, name: 'Dragonlord Placidusax', defeated: false },
      { id: 8696971, name: 'Godskin Duo', defeated: false },
    ],
  },
  {
    location: 'Leyndell, Ashen Capital',
    bosses: [
      { id: 667328, name: 'Godfrey, First Elden Lord (Hoarah Loux)', defeated: false },
      { id: 1085933, name: 'Sir Gideon Ofnir, the All-Knowing', defeated: false },
    ],
  },
  {
    location: 'Gravesite Plain',
    bosses: [
      { id: 6859916, name: 'Blackgaol Knight', defeated: false },
      { id: 643048, name: 'Chief Bloodfiend', defeated: false },
      { id: 5916875, name: 'Demi-Human Swordmaster Onze', defeated: false },
      { id: 929120, name: 'Divine Beast Dancing Lion', defeated: false },
      { id: 2865011, name: 'Ghostflame Dragon', defeated: false },
      { id: 7643169, name: 'Red Bear', defeated: false },
      { id: 2910926, name: 'Rellana Twin Moon Knight', defeated: false },
    ],
  },
  {
    location: 'Scadu Altus',
    bosses: [
      { id: 2715199, name: 'Black Knight Edredd', defeated: false },
      { id: 1097786, name: 'Black Knight Garrew', defeated: false },
      { id: 2377428, name: 'Count Ymir, Mother of Fingers', defeated: false },
      { id: 3328871, name: 'Curseblade Labirith', defeated: false },
      { id: 1526179, name: 'Death Knight', defeated: false },
      { id: 159992, name: 'Dryleaf Dane', defeated: false },
      { id: 6673687, name: 'Ghostflame Dragon', defeated: false },
      { id: 8636484, name: 'Golden Hippopotamus', defeated: false },
      { id: 9931484, name: 'Jori, Elder Inquisitor', defeated: false },
      { id: 8942436, name: 'Messmer the Impaler + Base Serpent Messmer', defeated: false },
      { id: 7697802, name: 'Metyr, Mother of Fingers', defeated: false },
      { id: 1706140, name: 'Rakshasa', defeated: false },
      { id: 1910402, name: 'Ralva the Great Red Bear', defeated: false },
      { id: 7394433, name: 'Tree Sentinel', defeated: false },
    ],
  },
  {
    location: 'Rauh Base',
    bosses: [
      { id: 8927324, name: 'Death Knight', defeated: false },
      { id: 4900121, name: 'Rugalea the Great Red Bear', defeated: false },
    ],
  },
  {
    location: 'Cerulean Coast',
    bosses: [
      { id: 4869727, name: 'Dancer of Ranah', defeated: false },
      { id: 8004850, name: 'Demi-Human Queen Marigga', defeated: false },
      { id: 5404850, name: 'Ghostflame Dragon', defeated: false },
      { id: 8750079, name: 'Putrescent Knight', defeated: false },
    ],
  },
  {
    location: "Charo's Hidden Grave",
    bosses: [
      { id: 1329297, name: 'Death Rite Bird', defeated: false },
      { id: 5476060, name: 'Lamenter', defeated: false },
    ],
  },
  {
    location: 'Scaduview',
    bosses: [
      { id: 4107058, name: 'Commander Gaius', defeated: false },
      { id: 5714298, name: 'Fallingstar Beast', defeated: false },
      { id: 8852824, name: 'Scadutree Avatar', defeated: false },
      { id: 2363673, name: 'Tree Sentinel (1)', defeated: false },
      { id: 2363672, name: 'Tree Sentinel (2)', defeated: false },
    ],
  },
  {
    location: 'Abyssal Woods',
    bosses: [{ id: 9449812, name: 'Midra Lord of Frenzied Flame', defeated: false }],
  },
  {
    location: 'Jagged Peak',
    bosses: [
      { id: 8014866, name: 'Ancient Dragon Senessax', defeated: false },
      { id: 6838820, name: 'Ancient Dragon-Man', defeated: false },
      { id: 5576246, name: 'Bayle the Dread', defeated: false },
      { id: 3647838, name: 'Jagged Peak Drake x2', defeated: false },
    ],
  },
  {
    location: 'Ancient Ruins of Rauh',
    bosses: [
      { id: 7342400, name: 'Divine Beast Dancing Lion', defeated: false },
      { id: 1191816, name: 'Romina, Saint of the Bud', defeated: false },
    ],
  },
  {
    location: 'Enir-Ilim',
    bosses: [
      {
        id: 9510885,
        name: 'Promised Consort Radahn + Radahn Consort of Miquella',
        defeated: false,
      },
    ],
  },
  {
    location: 'Elden Throne',
    bosses: [{ id: 8697422, name: 'Radagon of the Golden Order / Elden Beast', defeated: false }],
  },
]
