document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('gallery-grid');

    // Image list will be populated by the python script or manually
    // For now, initializing empty, to be filled by update_gallery.py
    const photos = [
        {
            "src": "photos/IMG_20140505_075220.jpg"
        },
        {
            "src": "photos/IMG_20140505_131019.jpg"
        },
        {
            "src": "photos/IMG_20140505_131027.jpg"
        },
        {
            "src": "photos/IMG_20140505_131046.jpg"
        },
        {
            "src": "photos/IMG_20140505_131058.jpg"
        },
        {
            "src": "photos/IMG_20140505_131125.jpg"
        },
        {
            "src": "photos/IMG_20140505_131135.jpg"
        },
        {
            "src": "photos/IMG_20140505_132533.jpg"
        },
        {
            "src": "photos/IMG_20140505_132541.jpg"
        },
        {
            "src": "photos/IMG_20140505_132644.jpg"
        },
        {
            "src": "photos/IMG_20140505_132728.jpg"
        },
        {
            "src": "photos/IMG_20140505_132734.jpg"
        },
        {
            "src": "photos/IMG_20140505_132804.jpg"
        },
        {
            "src": "photos/IMG_20140505_132817.jpg"
        },
        {
            "src": "photos/IMG_20140505_133813.jpg"
        },
        {
            "src": "photos/IMG_20140505_133852.jpg"
        },
        {
            "src": "photos/IMG_20140505_133855.jpg"
        },
        {
            "src": "photos/IMG_20140505_133907.jpg"
        },
        {
            "src": "photos/IMG_20140505_133909.jpg"
        },
        {
            "src": "photos/IMG_20140505_134006.jpg"
        },
        {
            "src": "photos/IMG_20140505_134007.jpg"
        },
        {
            "src": "photos/IMG_20140505_134245.jpg"
        },
        {
            "src": "photos/IMG_20140505_135050.jpg"
        },
        {
            "src": "photos/IMG_20140505_140600.jpg"
        },
        {
            "src": "photos/IMG_20140505_140615.jpg"
        },
        {
            "src": "photos/IMG_20140505_140637.jpg"
        },
        {
            "src": "photos/IMG_20140505_140655.jpg"
        },
        {
            "src": "photos/IMG_20140505_140729.jpg"
        },
        {
            "src": "photos/IMG_20140505_140833.jpg"
        },
        {
            "src": "photos/IMG_20140505_140911.jpg"
        },
        {
            "src": "photos/IMG_20140505_140955.jpg"
        },
        {
            "src": "photos/IMG_20140505_141014.jpg"
        },
        {
            "src": "photos/IMG_20140505_141646.jpg"
        },
        {
            "src": "photos/IMG_20140505_141722.jpg"
        },
        {
            "src": "photos/IMG_20140505_141730.jpg"
        },
        {
            "src": "photos/IMG_20140505_141806.jpg"
        },
        {
            "src": "photos/IMG_20140505_141813.jpg"
        },
        {
            "src": "photos/IMG_20140505_141847.jpg"
        },
        {
            "src": "photos/IMG_20140505_141850.jpg"
        },
        {
            "src": "photos/IMG_20140505_141907.jpg"
        },
        {
            "src": "photos/IMG_20140505_142049.jpg"
        },
        {
            "src": "photos/IMG_20140505_142113.jpg"
        },
        {
            "src": "photos/IMG_20140505_142207.jpg"
        },
        {
            "src": "photos/IMG_20140505_142338.jpg"
        },
        {
            "src": "photos/IMG_20140505_142355.jpg"
        },
        {
            "src": "photos/IMG_20140505_142427.jpg"
        },
        {
            "src": "photos/IMG_20140505_142429.jpg"
        },
        {
            "src": "photos/IMG_20140505_142430.jpg"
        },
        {
            "src": "photos/IMG_20140505_142432.jpg"
        },
        {
            "src": "photos/IMG_20140505_142433.jpg"
        },
        {
            "src": "photos/IMG_20140505_142539.jpg"
        },
        {
            "src": "photos/IMG_20140505_142616.jpg"
        },
        {
            "src": "photos/IMG_20140505_142622.jpg"
        },
        {
            "src": "photos/IMG_20140505_142745.jpg"
        },
        {
            "src": "photos/IMG_20140505_143045.jpg"
        },
        {
            "src": "photos/IMG_20140505_145455.jpg"
        },
        {
            "src": "photos/IMG_20140505_145511.jpg"
        },
        {
            "src": "photos/IMG_20140505_145523.jpg"
        },
        {
            "src": "photos/IMG_20140505_145538.jpg"
        },
        {
            "src": "photos/IMG_20140505_145543.jpg"
        },
        {
            "src": "photos/IMG_20140505_151212.jpg"
        },
        {
            "src": "photos/IMG_20140505_151220.jpg"
        },
        {
            "src": "photos/IMG_20140505_151231.jpg"
        },
        {
            "src": "photos/IMG_20140505_151255.jpg"
        },
        {
            "src": "photos/IMG_20140505_173314.jpg"
        },
        {
            "src": "photos/IMG_20140505_173410.jpg"
        },
        {
            "src": "photos/IMG_20140505_182431.jpg"
        },
        {
            "src": "photos/IMG_20140505_182510.jpg"
        },
        {
            "src": "photos/IMG_20140505_182544.jpg"
        },
        {
            "src": "photos/IMG_20140505_182611.jpg"
        },
        {
            "src": "photos/IMG_20140505_191400.jpg"
        },
        {
            "src": "photos/IMG_20140505_191422.jpg"
        },
        {
            "src": "photos/IMG_20140505_203243.jpg"
        },
        {
            "src": "photos/IMG_20140505_203248.jpg"
        },
        {
            "src": "photos/IMG_20140505_203315.jpg"
        },
        {
            "src": "photos/IMG_20140505_203343.jpg"
        },
        {
            "src": "photos/IMG_20140506_075945.jpg"
        },
        {
            "src": "photos/IMG_20140506_075953.jpg"
        },
        {
            "src": "photos/IMG_20140506_075955.jpg"
        },
        {
            "src": "photos/IMG_20140506_080019.jpg"
        },
        {
            "src": "photos/IMG_20140506_083617.jpg"
        },
        {
            "src": "photos/IMG_20140506_083624.jpg"
        },
        {
            "src": "photos/IMG_20140506_083652.jpg"
        },
        {
            "src": "photos/IMG_20140506_083705.jpg"
        },
        {
            "src": "photos/IMG_20140506_093451.jpg"
        },
        {
            "src": "photos/IMG_20140506_093452.jpg"
        },
        {
            "src": "photos/IMG_20140506_105705.jpg"
        },
        {
            "src": "photos/IMG_20140506_111150.jpg"
        },
        {
            "src": "photos/IMG_20140506_111157.jpg"
        },
        {
            "src": "photos/IMG_20140506_111559.jpg"
        },
        {
            "src": "photos/IMG_20140506_111620.jpg"
        },
        {
            "src": "photos/IMG_20140506_111728.jpg"
        },
        {
            "src": "photos/IMG_20140506_111741.jpg"
        },
        {
            "src": "photos/IMG_20140506_111756.jpg"
        },
        {
            "src": "photos/IMG_20140506_111811.jpg"
        },
        {
            "src": "photos/IMG_20140506_111825.jpg"
        },
        {
            "src": "photos/IMG_20140506_111848.jpg"
        },
        {
            "src": "photos/IMG_20140506_111907.jpg"
        },
        {
            "src": "photos/IMG_20140506_112039.jpg"
        },
        {
            "src": "photos/IMG_20140506_112104.jpg"
        },
        {
            "src": "photos/IMG_20140506_112121.jpg"
        },
        {
            "src": "photos/IMG_20140506_112133.jpg"
        },
        {
            "src": "photos/IMG_20140506_112235.jpg"
        },
        {
            "src": "photos/IMG_20140506_112238.jpg"
        },
        {
            "src": "photos/IMG_20140506_112447.jpg"
        },
        {
            "src": "photos/IMG_20140506_112718.jpg"
        },
        {
            "src": "photos/IMG_20140506_112813.jpg"
        },
        {
            "src": "photos/IMG_20140506_113719.jpg"
        },
        {
            "src": "photos/IMG_20140506_113723.jpg"
        },
        {
            "src": "photos/IMG_20140506_113857.jpg"
        },
        {
            "src": "photos/IMG_20140506_113919.jpg"
        },
        {
            "src": "photos/IMG_20140506_113927.jpg"
        },
        {
            "src": "photos/IMG_20140506_113956.jpg"
        },
        {
            "src": "photos/IMG_20140506_114007.jpg"
        },
        {
            "src": "photos/IMG_20140506_114113.jpg"
        },
        {
            "src": "photos/IMG_20140506_114119.jpg"
        },
        {
            "src": "photos/IMG_20140506_114124.jpg"
        },
        {
            "src": "photos/IMG_20140506_114200.jpg"
        },
        {
            "src": "photos/IMG_20140506_114914.jpg"
        },
        {
            "src": "photos/IMG_20140506_115032.jpg"
        },
        {
            "src": "photos/IMG_20140506_115122.jpg"
        },
        {
            "src": "photos/IMG_20140506_115147.jpg"
        },
        {
            "src": "photos/IMG_20140506_115419.jpg"
        },
        {
            "src": "photos/IMG_20140506_115631.jpg"
        },
        {
            "src": "photos/IMG_20140506_120427.jpg"
        },
        {
            "src": "photos/IMG_20140506_120431.jpg"
        },
        {
            "src": "photos/IMG_20140506_120436.jpg"
        },
        {
            "src": "photos/IMG_20140506_121517.jpg"
        },
        {
            "src": "photos/IMG_20140506_121543.jpg"
        },
        {
            "src": "photos/IMG_20140506_121618.jpg"
        },
        {
            "src": "photos/IMG_20140506_122226.jpg"
        },
        {
            "src": "photos/IMG_20140506_122242.jpg"
        },
        {
            "src": "photos/IMG_20140506_122411.jpg"
        },
        {
            "src": "photos/IMG_20140506_122417.jpg"
        },
        {
            "src": "photos/IMG_20140506_122422.jpg"
        },
        {
            "src": "photos/IMG_20140506_122438.jpg"
        },
        {
            "src": "photos/IMG_20140506_122529.jpg"
        },
        {
            "src": "photos/IMG_20140506_122535.jpg"
        },
        {
            "src": "photos/IMG_20140506_122624.jpg"
        },
        {
            "src": "photos/IMG_20140506_122632.jpg"
        },
        {
            "src": "photos/IMG_20140506_122730.jpg"
        },
        {
            "src": "photos/IMG_20140506_122902.jpg"
        },
        {
            "src": "photos/IMG_20140506_123033.jpg"
        },
        {
            "src": "photos/IMG_20140506_123057.jpg"
        },
        {
            "src": "photos/IMG_20140506_123339.jpg"
        },
        {
            "src": "photos/IMG_20140506_124656.jpg"
        },
        {
            "src": "photos/IMG_20140506_124713.jpg"
        },
        {
            "src": "photos/IMG_20140506_124826.jpg"
        },
        {
            "src": "photos/IMG_20140506_124839.jpg"
        },
        {
            "src": "photos/IMG_20140506_124901.jpg"
        },
        {
            "src": "photos/IMG_20140506_141956.jpg"
        },
        {
            "src": "photos/IMG_20140506_142001.jpg"
        },
        {
            "src": "photos/IMG_20140506_142206.jpg"
        },
        {
            "src": "photos/IMG_20140506_142217.jpg"
        },
        {
            "src": "photos/IMG_20140506_142417.jpg"
        },
        {
            "src": "photos/IMG_20140506_143501.jpg"
        },
        {
            "src": "photos/IMG_20140506_143505.jpg"
        },
        {
            "src": "photos/IMG_20140506_143552.jpg"
        },
        {
            "src": "photos/IMG_20140506_144300.jpg"
        },
        {
            "src": "photos/IMG_20140506_144350.jpg"
        },
        {
            "src": "photos/IMG_20140506_144351.jpg"
        },
        {
            "src": "photos/IMG_20140506_144742.jpg"
        },
        {
            "src": "photos/IMG_20140506_145050.jpg"
        },
        {
            "src": "photos/IMG_20140507_071947.jpg"
        },
        {
            "src": "photos/IMG_20140507_080319.jpg"
        },
        {
            "src": "photos/IMG_20140507_080334.jpg"
        },
        {
            "src": "photos/IMG_20140507_080349.jpg"
        },
        {
            "src": "photos/IMG_20140507_080405.jpg"
        },
        {
            "src": "photos/IMG_20140507_080420.jpg"
        },
        {
            "src": "photos/IMG_20140507_082207.jpg"
        },
        {
            "src": "photos/IMG_20140507_082750.jpg"
        },
        {
            "src": "photos/IMG_20140507_082939.jpg"
        },
        {
            "src": "photos/IMG_20140507_082943.jpg"
        },
        {
            "src": "photos/IMG_20140507_101717.jpg"
        },
        {
            "src": "photos/IMG_20140507_101729.jpg"
        },
        {
            "src": "photos/IMG_20140507_101740.jpg"
        },
        {
            "src": "photos/IMG_20140507_101745.jpg"
        },
        {
            "src": "photos/IMG_20140507_102158.jpg"
        },
        {
            "src": "photos/IMG_20140507_102207.jpg"
        },
        {
            "src": "photos/IMG_20140507_102223.jpg"
        },
        {
            "src": "photos/IMG_20140507_102255.jpg"
        },
        {
            "src": "photos/IMG_20140507_102610.jpg"
        },
        {
            "src": "photos/IMG_20140507_142520.jpg"
        },
        {
            "src": "photos/IMG_20140507_142522.jpg"
        },
        {
            "src": "photos/IMG_20140507_155210.jpg"
        },
        {
            "src": "photos/IMG_20140507_155445.jpg"
        },
        {
            "src": "photos/IMG_20140507_155452.jpg"
        },
        {
            "src": "photos/IMG_20140507_155525.jpg"
        },
        {
            "src": "photos/IMG_20140507_155740.jpg"
        },
        {
            "src": "photos/IMG_20140507_155748.jpg"
        },
        {
            "src": "photos/IMG_20140507_155833.jpg"
        },
        {
            "src": "photos/IMG_20140507_160347.jpg"
        },
        {
            "src": "photos/IMG_20140507_160844.jpg"
        },
        {
            "src": "photos/IMG_20140507_160859.jpg"
        },
        {
            "src": "photos/IMG_20140507_160915.jpg"
        },
        {
            "src": "photos/IMG_20140507_160928.jpg"
        },
        {
            "src": "photos/IMG_20140507_160940.jpg"
        },
        {
            "src": "photos/IMG_20140507_160945.jpg"
        },
        {
            "src": "photos/IMG_20140507_161018.jpg"
        },
        {
            "src": "photos/IMG_20140507_161130.jpg"
        },
        {
            "src": "photos/IMG_20140507_161139.jpg"
        },
        {
            "src": "photos/IMG_20140507_161343.jpg"
        },
        {
            "src": "photos/IMG_20140507_161352.jpg"
        },
        {
            "src": "photos/IMG_20140507_161358.jpg"
        },
        {
            "src": "photos/IMG_20140507_161403.jpg"
        },
        {
            "src": "photos/IMG_20140507_161421.jpg"
        },
        {
            "src": "photos/IMG_20140507_161535.jpg"
        },
        {
            "src": "photos/IMG_20140507_161558.jpg"
        },
        {
            "src": "photos/IMG_20140507_161625.jpg"
        },
        {
            "src": "photos/IMG_20140507_161642.jpg"
        },
        {
            "src": "photos/IMG_20140507_161648.jpg"
        },
        {
            "src": "photos/IMG_20140507_161709.jpg"
        },
        {
            "src": "photos/IMG_20140507_161718.jpg"
        },
        {
            "src": "photos/IMG_20140507_161726.jpg"
        },
        {
            "src": "photos/IMG_20140507_161803.jpg"
        },
        {
            "src": "photos/IMG_20140507_170332.JPG"
        },
        {
            "src": "photos/IMG_20140508_081722.jpg"
        },
        {
            "src": "photos/IMG_20140508_081731.jpg"
        },
        {
            "src": "photos/IMG_20140508_081805.jpg"
        },
        {
            "src": "photos/IMG_20140508_082026.jpg"
        },
        {
            "src": "photos/IMG_20140508_083053.jpg"
        },
        {
            "src": "photos/IMG_20140508_083101.jpg"
        },
        {
            "src": "photos/IMG_20140508_083744.jpg"
        },
        {
            "src": "photos/IMG_20140508_083758.jpg"
        },
        {
            "src": "photos/IMG_20140508_083815.jpg"
        },
        {
            "src": "photos/IMG_20140508_083822.jpg"
        },
        {
            "src": "photos/IMG_20140508_083827.jpg"
        },
        {
            "src": "photos/IMG_20140508_083854.jpg"
        },
        {
            "src": "photos/IMG_20140508_083903.jpg"
        },
        {
            "src": "photos/IMG_20140508_084546.jpg"
        },
        {
            "src": "photos/IMG_20140508_084552.jpg"
        },
        {
            "src": "photos/IMG_20140508_084631.jpg"
        },
        {
            "src": "photos/IMG_20140508_084646.jpg"
        },
        {
            "src": "photos/IMG_20140508_084700.jpg"
        },
        {
            "src": "photos/IMG_20140508_095241.jpg"
        },
        {
            "src": "photos/IMG_20140508_101736.jpg"
        },
        {
            "src": "photos/IMG_20140508_101756.jpg"
        },
        {
            "src": "photos/IMG_20140508_102913.jpg"
        },
        {
            "src": "photos/IMG_20140508_103007.jpg"
        },
        {
            "src": "photos/IMG_20140508_105322.jpg"
        },
        {
            "src": "photos/IMG_20140508_105339.jpg"
        },
        {
            "src": "photos/IMG_20140508_170348.jpg"
        },
        {
            "src": "photos/IMG_20140508_170352.jpg"
        },
        {
            "src": "photos/IMG_20140508_175421.jpg"
        },
        {
            "src": "photos/IMG_20140508_175426.jpg"
        },
        {
            "src": "photos/IMG_20140508_175431.jpg"
        },
        {
            "src": "photos/IMG_20140508_175435.jpg"
        },
        {
            "src": "photos/IMG_20140508_180049.jpg"
        },
        {
            "src": "photos/IMG_20140508_180104.jpg"
        },
        {
            "src": "photos/IMG_20140508_180109.jpg"
        },
        {
            "src": "photos/IMG_20140508_180120.jpg"
        },
        {
            "src": "photos/IMG_20140508_180152.jpg"
        },
        {
            "src": "photos/IMG_20140508_180437.jpg"
        },
        {
            "src": "photos/IMG_20140508_181344.jpg"
        },
        {
            "src": "photos/IMG_20140508_181346.jpg"
        },
        {
            "src": "photos/IMG_20140508_181347.jpg"
        },
        {
            "src": "photos/IMG_20140508_181403.jpg"
        },
        {
            "src": "photos/IMG_20140508_181504.jpg"
        },
        {
            "src": "photos/IMG_20140508_181514.jpg"
        },
        {
            "src": "photos/IMG_20140508_181539.jpg"
        },
        {
            "src": "photos/IMG_20140508_181545.jpg"
        },
        {
            "src": "photos/IMG_20140508_181606.jpg"
        },
        {
            "src": "photos/IMG_20140508_181611.jpg"
        },
        {
            "src": "photos/IMG_20140508_183313.jpg"
        },
        {
            "src": "photos/IMG_20140508_183328.jpg"
        },
        {
            "src": "photos/IMG_20140508_191014.jpg"
        },
        {
            "src": "photos/IMG_20140509_075056.jpg"
        },
        {
            "src": "photos/IMG_20140509_075230.jpg"
        },
        {
            "src": "photos/IMG_20140509_075243.jpg"
        },
        {
            "src": "photos/IMG_20140509_080611.jpg"
        },
        {
            "src": "photos/IMG_20140509_080621.jpg"
        },
        {
            "src": "photos/IMG_20140509_080642.jpg"
        },
        {
            "src": "photos/IMG_20140509_080736.jpg"
        },
        {
            "src": "photos/IMG_20140509_080756.jpg"
        },
        {
            "src": "photos/IMG_20140509_081346.jpg"
        },
        {
            "src": "photos/IMG_20140509_090005.jpg"
        },
        {
            "src": "photos/IMG_20140509_090015.jpg"
        },
        {
            "src": "photos/IMG_20140509_090026.jpg"
        },
        {
            "src": "photos/IMG_20140509_090032.jpg"
        },
        {
            "src": "photos/IMG_20140509_091613.jpg"
        },
        {
            "src": "photos/IMG_20140509_091620.jpg"
        },
        {
            "src": "photos/IMG_20140509_091701.jpg"
        },
        {
            "src": "photos/IMG_20140509_091747.jpg"
        },
        {
            "src": "photos/IMG_20140509_091753.jpg"
        },
        {
            "src": "photos/IMG_20140509_091813.jpg"
        },
        {
            "src": "photos/IMG_20140509_091844.jpg"
        },
        {
            "src": "photos/IMG_20140509_103815.jpg"
        },
        {
            "src": "photos/IMG_20140509_103833.jpg"
        },
        {
            "src": "photos/IMG_20140509_103917.jpg"
        },
        {
            "src": "photos/IMG_20140509_104101.jpg"
        },
        {
            "src": "photos/IMG_20140509_104125.jpg"
        },
        {
            "src": "photos/IMG_20140509_104522.jpg"
        },
        {
            "src": "photos/IMG_20140509_154705.jpg"
        },
        {
            "src": "photos/IMG_20140509_154715.jpg"
        },
        {
            "src": "photos/IMG_20140510_070125.jpg"
        },
        {
            "src": "photos/IMG_20140510_070127.jpg"
        },
        {
            "src": "photos/IMG_20140510_071103.jpg"
        },
        {
            "src": "photos/IMG_20140510_071113.jpg"
        },
        {
            "src": "photos/IMG_20140510_071127.jpg"
        },
        {
            "src": "photos/IMG_20140510_073259.jpg"
        },
        {
            "src": "photos/IMG_20140510_073310.jpg"
        },
        {
            "src": "photos/IMG_20140510_073340.jpg"
        },
        {
            "src": "photos/IMG_20140510_073347.jpg"
        },
        {
            "src": "photos/IMG_20140510_073405.jpg"
        },
        {
            "src": "photos/IMG_20140510_090444.jpg"
        },
        {
            "src": "photos/IMG_20140510_090534.jpg"
        },
        {
            "src": "photos/IMG_20140510_090642.jpg"
        },
        {
            "src": "photos/IMG_20140510_090724.jpg"
        },
        {
            "src": "photos/IMG_20140510_090731.jpg"
        },
        {
            "src": "photos/IMG_20140510_090900.jpg"
        },
        {
            "src": "photos/IMG_20140510_091018.jpg"
        },
        {
            "src": "photos/IMG_20140510_091022.jpg"
        },
        {
            "src": "photos/IMG_20140510_091026.jpg"
        },
        {
            "src": "photos/IMG_20140510_091150.jpg"
        },
        {
            "src": "photos/IMG_20140510_091158.jpg"
        },
        {
            "src": "photos/IMG_20140510_091453.jpg"
        },
        {
            "src": "photos/IMG_20140510_095618.jpg"
        },
        {
            "src": "photos/IMG_20140510_095639.jpg"
        },
        {
            "src": "photos/IMG_20140510_095705.jpg"
        },
        {
            "src": "photos/IMG_20140510_111706.jpg"
        },
        {
            "src": "photos/IMG_20140510_111735.jpg"
        },
        {
            "src": "photos/IMG_20140510_111740.jpg"
        },
        {
            "src": "photos/IMG_20140510_111744.jpg"
        },
        {
            "src": "photos/IMG_20140510_111849.jpg"
        },
        {
            "src": "photos/IMG_20140510_115113.jpg"
        },
        {
            "src": "photos/IMG_20140510_115123.jpg"
        },
        {
            "src": "photos/IMG_20140510_115135.jpg"
        },
        {
            "src": "photos/IMG_20140510_115158.jpg"
        },
        {
            "src": "photos/IMG_20140510_115223.jpg"
        },
        {
            "src": "photos/IMG_20140510_115602.jpg"
        },
        {
            "src": "photos/IMG_20140510_115605.jpg"
        },
        {
            "src": "photos/IMG_20140510_115618.jpg"
        },
        {
            "src": "photos/IMG_20140511_102720.jpg"
        },
        {
            "src": "photos/IMG_20140511_102730.jpg"
        },
        {
            "src": "photos/IMG_20140511_105757.jpg"
        },
        {
            "src": "photos/IMG_20140511_105803.jpg"
        },
        {
            "src": "photos/IMG_20140513_091506.jpg"
        },
        {
            "src": "photos/IMG_20140513_091511.jpg"
        },
        {
            "src": "photos/IMG_20140519_103935.jpg"
        },
        {
            "src": "photos/IMG_20140520_120823.jpg"
        },
        {
            "src": "photos/taj.JPG"
        }
    ];

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementsByClassName('close')[0];

    function openLightbox(src) {
        lightbox.style.display = "block";
        lightboxImg.src = src;
        captionText.innerHTML = "Captured Moment"; // Could be dynamic if we had titles
    }

    closeBtn.onclick = function () {
        lightbox.style.display = "none";
    }

    // Close on outside click
    window.onclick = function (event) {
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    }

    // Function to render images
    function renderGallery() {
        if (photos.length === 0) {
            // Fallback or empty state if needed
            console.log("No photos found. Run update_gallery.py");
            return;
        }

        photos.forEach((photo, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';

            // Staggered animation delay


            const img = document.createElement('img');
            // Use data-src for lazy loading if we were using a library, 
            // but native lazy loading is easier
            img.src = photo.src;
            img.alt = "Wedding Memory";
            img.loading = "lazy";

            img.onload = () => {
                item.classList.add('loaded');
            };

            // Add click event for lightbox
            item.onclick = () => openLightbox(photo.src);

            item.appendChild(img);
            galleryGrid.appendChild(item);
        });
    }

    renderGallery();
});
