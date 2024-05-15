import SwipeUI from "@/components/swipe/swipUI";

export default function Swipe() {
    return (
        <main className="flex flex-col justify-center items-center mx-auto mt-8">
            <div className="mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[60svh] w-[30svh]" viewBox="0 0 1510 376" fill="none">
            <path d="M42 193V168.75H138.5V193H42ZM4.5 231L75.25 69H105.75L177 231H146.25L84.25 84.75H96.75L35 231H4.5ZM264.641 233.75C254.474 233.75 245.807 231.75 238.641 227.75C231.641 223.75 225.974 218.5 221.641 212C217.474 205.333 214.391 198.25 212.391 190.75C210.391 183.083 209.391 175.833 209.391 169C209.391 159.833 210.307 151.333 212.141 143.5C214.141 135.667 217.224 128.833 221.391 123C225.724 117 231.391 112.333 238.391 109C245.557 105.5 254.307 103.75 264.641 103.75C276.307 103.75 286.807 106.583 296.141 112.25C305.474 117.75 312.891 125.417 318.391 135.25C323.891 144.917 326.641 156.167 326.641 169C326.641 181.833 323.807 193.167 318.141 203C312.641 212.667 305.224 220.25 295.891 225.75C286.557 231.083 276.141 233.75 264.641 233.75ZM256.391 210.75C264.724 210.75 272.057 209 278.391 205.5C284.724 202 289.641 197.083 293.141 190.75C296.641 184.417 298.391 177.167 298.391 169C298.391 156.5 294.724 146.333 287.391 138.5C280.057 130.5 269.724 126.5 256.391 126.5C248.057 126.5 240.557 128.25 233.891 131.75C227.224 135.25 221.974 140.167 218.141 146.5C214.307 152.667 212.391 160.167 212.391 169C212.391 177 214.141 184.167 217.641 190.5C221.141 196.833 226.141 201.833 232.641 205.5C239.141 209 247.057 210.75 256.391 210.75ZM184.641 106.5H211.141L212.391 137V281H184.641V106.5ZM418.889 233.75C408.722 233.75 400.055 231.75 392.889 227.75C385.889 223.75 380.222 218.5 375.889 212C371.722 205.333 368.639 198.25 366.639 190.75C364.639 183.083 363.639 175.833 363.639 169C363.639 159.833 364.555 151.333 366.389 143.5C368.389 135.667 371.472 128.833 375.639 123C379.972 117 385.639 112.333 392.639 109C399.805 105.5 408.555 103.75 418.889 103.75C430.555 103.75 441.055 106.583 450.389 112.25C459.722 117.75 467.139 125.417 472.639 135.25C478.139 144.917 480.889 156.167 480.889 169C480.889 181.833 478.055 193.167 472.389 203C466.889 212.667 459.472 220.25 450.139 225.75C440.805 231.083 430.389 233.75 418.889 233.75ZM410.639 210.75C418.972 210.75 426.305 209 432.639 205.5C438.972 202 443.889 197.083 447.389 190.75C450.889 184.417 452.639 177.167 452.639 169C452.639 156.5 448.972 146.333 441.639 138.5C434.305 130.5 423.972 126.5 410.639 126.5C402.305 126.5 394.805 128.25 388.139 131.75C381.472 135.25 376.222 140.167 372.389 146.5C368.555 152.667 366.639 160.167 366.639 169C366.639 177 368.389 184.167 371.889 190.5C375.389 196.833 380.389 201.833 386.889 205.5C393.389 209 401.305 210.75 410.639 210.75ZM338.889 106.5H365.389L366.639 137V281H338.889V106.5ZM495.637 56.5H523.387V231H495.637V56.5ZM577.102 53.75V80.5H543.852V53.75H577.102ZM546.352 106.5H574.352V231H546.352V106.5ZM661.34 233.75C647.507 233.75 635.09 231.25 624.09 226.25C613.09 221.25 604.423 213.917 598.09 204.25C591.757 194.583 588.59 182.833 588.59 169C588.59 155.333 591.757 143.667 598.09 134C604.423 124.167 613.09 116.667 624.09 111.5C635.09 106.333 647.507 103.75 661.34 103.75C675.173 103.75 687.507 106.333 698.34 111.5C709.173 116.667 717.673 124.167 723.84 134C730.173 143.667 733.34 155.333 733.34 169C733.34 182.833 730.173 194.583 723.84 204.25C717.673 213.917 709.173 221.25 698.34 226.25C687.507 231.25 675.173 233.75 661.34 233.75ZM661.34 211C669.34 211 676.673 209.417 683.34 206.25C690.007 203.083 695.257 198.333 699.09 192C703.09 185.667 705.09 178 705.09 169C705.09 160 703.09 152.333 699.09 146C695.257 139.667 690.007 134.833 683.34 131.5C676.84 128 669.507 126.25 661.34 126.25C653.173 126.25 645.757 127.917 639.09 131.25C632.423 134.583 627.007 139.417 622.84 145.75C618.84 152.083 616.84 159.833 616.84 169C616.84 178 618.84 185.667 622.84 192C626.84 198.333 632.173 203.083 638.84 206.25C645.673 209.417 653.173 211 661.34 211Z" fill="white"/>
            <path d="M777.75 177.25H805.5C806.167 183.417 808.583 189 812.75 194C817.083 198.833 822.75 202.667 829.75 205.5C836.917 208.167 845.083 209.5 854.25 209.5C862.417 209.5 869.167 208.5 874.5 206.5C879.833 204.5 883.75 201.75 886.25 198.25C888.917 194.583 890.25 190.333 890.25 185.5C890.25 180.667 888.667 176.917 885.5 174.25C882.5 171.417 877.833 169.083 871.5 167.25C865.167 165.25 857.083 163.333 847.25 161.5C839.083 160 831.167 158 823.5 155.5C815.833 153 808.917 149.833 802.75 146C796.75 142.167 792 137.5 788.5 132C785 126.333 783.25 119.667 783.25 112C783.25 103.333 785.667 95.5 790.5 88.5C795.5 81.5 802.833 76 812.5 72C822.167 68 833.917 66 847.75 66C868.917 66 885.083 70.9167 896.25 80.75C907.417 90.4167 912.833 103.583 912.5 120.25H885.25C884.75 109.75 880.917 102.167 873.75 97.5C866.583 92.8333 857.5 90.5 846.5 90.5C836.667 90.5 828.417 92.25 821.75 95.75C815.083 99.25 811.75 104.917 811.75 112.75C811.75 116.083 812.5 119 814 121.5C815.667 123.833 818.333 126 822 128C825.667 129.833 830.667 131.667 837 133.5C843.5 135.167 851.417 137 860.75 139C868.75 140.333 876.25 142.167 883.25 144.5C890.25 146.833 896.333 149.75 901.5 153.25C906.833 156.75 911 161.25 914 166.75C917 172.25 918.5 179 918.5 187C918.5 196.167 916.167 204.333 911.5 211.5C906.833 218.5 899.667 224.083 890 228.25C880.5 232.25 868.167 234.25 853 234.25C841.5 234.25 831.417 232.917 822.75 230.25C814.25 227.417 807 223.833 801 219.5C795 215 790.167 210.167 786.5 205C783 199.833 780.5 194.833 779 190C777.667 185 777.25 180.75 777.75 177.25ZM1079.92 210L1071.67 209.75L1107.92 106.5H1138.42L1089.92 231H1063.67L1024.92 127.25H1033.67L993.924 231H967.674L920.174 106.5H950.674L985.924 210H977.674L1013.17 106.5H1045.67L1079.92 210ZM1178.47 53.75V80.5H1145.22V53.75H1178.47ZM1147.72 106.5H1175.72V231H1147.72V106.5ZM1480.93 190H1507.68C1506.35 198.5 1503.01 206.083 1497.68 212.75C1492.51 219.25 1485.43 224.417 1476.43 228.25C1467.43 231.917 1456.68 233.75 1444.18 233.75C1430.01 233.75 1417.35 231.167 1406.18 226C1395.01 220.667 1386.26 213.167 1379.93 203.5C1373.6 193.833 1370.43 182.333 1370.43 169C1370.43 155.833 1373.51 144.333 1379.68 134.5C1385.85 124.667 1394.35 117.083 1405.18 111.75C1416.18 106.417 1428.85 103.75 1443.18 103.75C1458.01 103.75 1470.35 106.417 1480.18 111.75C1490.18 116.917 1497.6 124.75 1502.43 135.25C1507.26 145.583 1509.26 158.667 1508.43 174.5H1398.68C1399.51 181.5 1401.76 187.833 1405.43 193.5C1409.26 199 1414.43 203.333 1420.93 206.5C1427.43 209.5 1435.01 211 1443.68 211C1453.35 211 1461.43 209.083 1467.93 205.25C1474.6 201.417 1478.93 196.333 1480.93 190ZM1442.43 126.25C1431.1 126.25 1421.76 129.083 1414.43 134.75C1407.1 140.25 1402.35 147.333 1400.18 156H1480.43C1479.76 146.667 1476.01 139.417 1469.18 134.25C1462.35 128.917 1453.43 126.25 1442.43 126.25Z" fill="white"/>
            <path d="M1279 301V95" stroke="white" stroke-width="150" stroke-linecap="round"/>
            <path d="M1279 301V95" stroke="black" stroke-width="110" stroke-linecap="round"/>
            <path d="M1269 285C1269 290.523 1273.48 295 1279 295C1284.52 295 1289 290.523 1289 285H1269ZM1286.07 71.9289C1282.17 68.0237 1275.83 68.0237 1271.93 71.9289L1208.29 135.569C1204.38 139.474 1204.38 145.805 1208.29 149.711C1212.19 153.616 1218.53 153.616 1222.43 149.711L1279 93.1421L1335.57 149.711C1339.47 153.616 1345.81 153.616 1349.71 149.711C1353.62 145.805 1353.62 139.474 1349.71 135.569L1286.07 71.9289ZM1289 285V79H1269V285H1289Z" fill="white"/>
            </svg>
            </div>
            <SwipeUI />
        </main>
    )
}