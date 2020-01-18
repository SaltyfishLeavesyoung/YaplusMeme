// miniprogram/pages/maker/maker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showWarning: true,
    showHelp: false,
    memeList: [
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/akeno_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/akeno_1.png?sign=25b853ab62df7c93f79c361ec93d7e11&t=1574321191'
      },
      {
        flleid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/akeno_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/akeno_2.jpg?sign=33ecd17ba3137f5df3e383a8d536ed19&t=1574321236'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/akeno_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/akeno_3.jpg?sign=082a7f42a778a89408febc854918d78a&t=1574321294'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/alice_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/alice_1.jpg?sign=082bbaeccb607b6aa69a0d4f20113379&t=1574321331'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/alice_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/alice_2.jpg?sign=c9b4d80a5f0e8ee2f5e50c839ee99566&t=1574321363'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/alice_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/alice_3.jpg?sign=584cc769a5d1f66dfcbff62045a68af3&t=1574321400'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/anzu_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/anzu_1.png?sign=9bf99f359d47f92c3276da7c28e2fd79&t=1574321450'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/anzu_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/anzu_2.jpg?sign=5a6f435be38932d3edd0d4d892bae7c7&t=1574321487'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/aoba_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/aoba_1.jpg?sign=cfff95298958d528f0d577ddef95f3a1&t=1574321516'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chino_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chino_1.jpg?sign=8004444b1df3b8286bb86639f09e438f&t=1574321549'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chino_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chino_2.jpg?sign=8b5575a15830a37262ff26c8c9fe5bec&t=1574346813'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chino_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chino_3.jpg?sign=3a5ae60f80e1b8c250d01c0cd9d7a55e&t=1574347440'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chito_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chito_1.jpg?sign=922c5ad0692c237e370b108c0aed2cb1&t=1574347454'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chitose_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chitose_1.png?sign=d3ac0695e7b8d98cb0f685ce8c756a63&t=1574347472'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chitose_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chitose_2.jpg?sign=d32482769502983e4d576df257c9202e&t=1574347495'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chiya_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chiya_1.png?sign=87825b24cd52ad51c2a7b7a15b075f97&t=1574347519'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chiya_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chiya_2.jpg?sign=9a55d9f7e80cf15ab2728a8be101939d&t=1574347531'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chiya_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chiya_3.jpg?sign=7992dbb3923960659f6460e66dbb93e6&t=1574347548'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chiya_4.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chiya_4.jpg?sign=4d64e64dd32a2e1d07ee4f726d3d84e7&t=1574347565'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chiya_5.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chiya_5.jpg?sign=9e09c01d2568d85f74ea8595f3fee3a7&t=1574347585'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/chiya__1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/chiya__1.jpg?sign=351db6642f09070310667f0f467e5a63&t=1574347601'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/cocoa_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/cocoa_1.png?sign=6e5008f94843c830e56fc786cb6b2e2a&t=1574347620'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/cocoa_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/cocoa_2.jpg?sign=353468e7ea0a23fe25f1d900560871ef&t=1574347635'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/cocoa_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/cocoa_3.jpg?sign=fba022c24e35f9bc6809ddbb633e66b8&t=1574347667'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/cocoa_4.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/cocoa_4.jpg?sign=31a0832ea21583d7de612d382dfb414e&t=1574347687'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/cocoa_5.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/cocoa_5.jpg?sign=d17861d69bc4a3c33dce80e089827b72&t=1574347699'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/fumika_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/fumika_1.jpg?sign=a1bd05e89181a63d70ca3092037403c2&t=1574347834'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/fumika_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/fumika_2.jpg?sign=af227d5fcfbf2b084b0e0755bbacd65f&t=1574347850'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/gavurīru_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/gavur%C4%ABru_1.jpg?sign=e368840cbc10a67013777706d8cf4bd7&t=1574347862'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/gavurīru_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/gavur%C4%ABru_2.jpg?sign=e40156b10def05f7df8282daf3c11e1c&t=1574347878'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/hana_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/hana_1.jpg?sign=e525c43ca1bd9cc5ba827e37f5daed59&t=1574347895'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/hinata_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/hinata_1.jpg?sign=e98cf797d663a6bb03100c9a76b78428&t=1574347909'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/jita_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/jita_1.png?sign=6c66aae832f7dad699c0669f8e01617f&t=1574347925'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/jita_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/jita_2.jpg?sign=98d476b59dc68f8e5ae48ebf3e34aa99&t=1574347942'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/kaoruko_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/kaoruko_1.png?sign=3a93f844b69fcdec22f702f2c1838faf&t=1574347954'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/karen_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/karen_1.jpg?sign=f77dbe271ce76f97898b398bd5056c48&t=1574347983'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/karen_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/karen_2.jpg?sign=c5acd77a1d0b4336cc4df54c99211178&t=1574348000'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/karen_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/karen_3.jpg?sign=358d6748a00c67da13ecbd6061f5f5ae&t=1574348013'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/koharu.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/koharu.jpg?sign=2b4aa43f4de89a8a940f79dc9aa1a7ba&t=1574348031'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/kon_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/kon_1.jpg?sign=1d4f7aead26dd85895a2ad8e0059fdce&t=1574348047'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/kon_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/kon_2.jpg?sign=818a019667de146b9ced57c9d35bf9a3&t=1574348063'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/koume_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/koume_1.jpg?sign=3fe38caedaef2ea3346301aacd744aa9&t=1574348077'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/koume_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/koume_2.jpg?sign=84601f738b4af3eccb761384da727e7f&t=1574348095'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/kyoko_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/kyoko_1.png?sign=e12d1b3f6adfbf32369a2792ee3c6d59&t=1574348109'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/kyoko_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/kyoko_2.jpg?sign=13884805f75e8c3c0d6469bf918651b1&t=1574348126'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/lilith_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/lilith_1.jpg?sign=6f000c0e6af0c36b2f36b1d668a0dccb&t=1574348138'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/maron_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/maron_1.png?sign=1b28677f115cb1aa0193bb7474340a34&t=1574348268'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/maron_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/maron_2.jpg?sign=65eaf687e1a0f0cb978572e73265d912&t=1574348277'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/megu_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/megu_1.jpg?sign=2023aa10348b9ef21b62f6fbbc89bf42&t=1574348291'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/megu_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/megu_2.jpg?sign=6b93f8de56ea7f29188e64f06113a695&t=1574348310'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/megu_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/megu_3.jpg?sign=ee39ac0e2a889c021413c5ffde4a44df&t=1574348321'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/megumin_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/megumin_1.jpg?sign=89353a7b2d88692538bf86b2a6c19d86&t=1574348340'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/megumin_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/megumin_2.jpg?sign=190379698aae80313821544b48086476&t=1574348355'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/mikan_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/mikan_1.jpg?sign=72cd9732aa15d6b979baf047d33c53fd&t=1574348373'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/miyako_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/miyako_1.png?sign=2c1b84ad76bfdda389fdd800c997fe0b&t=1574348391'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/mokou_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/mokou_1.jpg?sign=16018d6d46951477a4f90d3b4021da92&t=1574348410'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/momo_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/momo_1.jpg?sign=ed98413cf71d81ee435e03feac418c20&t=1574348425'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/momo_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/momo_2.jpg?sign=02f97e80d5cf43fa5e33ca432226c357&t=1574348439'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/momoka_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/momoka_1.jpg?sign=06114e1dc646b52fbd07c236044b79a4&t=1574348461'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/nazrin_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/nazrin_1.jpg?sign=bed3567be7b71f78167bbb976563199d&t=1574348479'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/nazrin_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/nazrin_2.jpg?sign=dbc2d5b449e46503ca169fcd5384e6e3&t=1574348493'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/noa_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/noa_1.jpg?sign=2b271eda3c8adb2ea33eba011c1e41b7&t=1574348505'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/noel_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/noel_1.png?sign=6fac9da34084ed2af19c6eb5c993b7d0&t=1574348523'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/noel_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/noel_2.jpg?sign=508d2ad7bc3c01f7cd9f26b999984ecb&t=1574348549'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/noel_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/noel_3.jpg?sign=401c62e85957c6efe1aa7c25b96458f7&t=1574348568'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/noel_4.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/noel_4.jpg?sign=c221f4eff038578d3e97bebec5d008e2&t=1574348583'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/noel_5.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/noel_5.jpg?sign=48bd2685de8b3abb80ecf2bf4e5ff6af&t=1574348598'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/nono_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/nono_1.jpg?sign=144797079415f12e35089ed03d8cdda2&t=1574348612'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/nono_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/nono_2.jpg?sign=26133cbad3cbd9c38cc3baa94027304c&t=1574348626'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/nono_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/nono_3.jpg?sign=642d4cc8bd04cc14a7ab8a759fffbdf6&t=1574348640'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/nono_4.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/nono_4.jpg?sign=91db56d5554d8fa6291059cbb7b9f650&t=1574348657'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/nonoka_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/nonoka_1.jpg?sign=dbf30185a6ff9d7a075611ed146433d5&t=1574348681'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/omi_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/omi_1.jpg?sign=b7aa049940428f5377bd60f845f483f1&t=1574348695'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/ramu_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/ramu_1.jpg?sign=aba670bd9b5e3ac1e32dfb6d672ac1af&t=1574348825'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/remu_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/remu_1.jpg?sign=4b708d2205731a146e2bbdf0063ad62c&t=1574348838'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/retoree_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/retoree_1.png?sign=ea28feb67a7ccbab6de097dc9d8d6240&t=1574348854'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/retoree_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/retoree_2.jpg?sign=f4605de8fce3f91f00f1af4feca58ceb&t=1574348867'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/rin_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/rin_1.jpg?sign=05db90fc30d7368ec232606a45b59632&t=1574348880'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/risan_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/risan_1.png?sign=127c856d90926eaa35f8703d672b0e12&t=1574348894'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/risan_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/risan_2.jpg?sign=4ba05abebf25003f45a0ea1770f12a36&t=1574348908'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/risan_3.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/risan_3.png?sign=fee76bae47b048b1f5c9fd1f9e403025&t=1574348925'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/rize_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/rize_1.jpg?sign=baea4dfa2c0c649f137effbd52cca333&t=1574348960'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/rize_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/rize_2.jpg?sign=9fd4beaf45ebdbc86bced73ec333baa3&t=1574348967'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/rize_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/rize_3.jpg?sign=cd667c4e57ed61237439ae6a3860d805&t=1574348982'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/sagiri_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/sagiri_1.jpg?sign=bcb7f0a01927c19660248e4fdb8d4d31&t=1574348998'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/serval_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/serval_1.jpg?sign=133f29a366e0c19e8480d2f33402f3c4&t=1574349010'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/shamiko_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/shamiko_1.jpg?sign=5ebd35271fbf86f90bd936a8079c73a3&t=1574349037'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/shamiko_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/shamiko_2.jpg?sign=46f7c9ea05d1c8ef5b4625cd6212c8ba&t=1574349054'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/shamiko_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/shamiko_3.jpg?sign=7b20a14436d3c0a5b63228cb1610a6dd&t=1574349069'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/shione_1.png',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/shione_1.png?sign=abdbada849bcba1f879725083f98fa72&t=1574349084'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/shione_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/shione_2.jpg?sign=3228e5fba6d1111a4b9d162376c98276&t=1574349099'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/syaro_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/syaro_1.jpg?sign=876e336aa8cd68b880a033dad9d4a76e&t=1574349113'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/syaro_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/syaro_2.jpg?sign=6068abcb93ae350dc6200e840e3c3902&t=1574349128'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/wilbell_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/wilbell_1.jpg?sign=f6c2d444f2293ac98db1a395157aefe9&t=1574349141'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/wilbell_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/wilbell_2.jpg?sign=57e913365e01be42cb8c2b03f8aaa340&t=1574349156'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/yui_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/yui_1.jpg?sign=53a585358b492433199f83967a148af9&t=1574349170'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/yui_2.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/yui_2.jpg?sign=a5c8647df97f7f8ecb9bf591d42b4226&t=1574349182'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/yui_3.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/yui_3.jpg?sign=eba58552aadc8a60476910a0ef0988df&t=1574349195'
      },
      {
        fileid: 'cloud://yaplusmeme-d4r55.7961-yaplusmeme-d4r55-1300619946/yuuri_1.jpg',
        url: 'https://7961-yaplusmeme-d4r55-1300619946.tcb.qcloud.la/yuuri_1.jpg?sign=830e1c9efb42be6180770c4e65619b7e&t=1574349206'
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  hideWarning(e) {
    this.setData({
      showWarning: false,
    })
  },

  hideHelp(e) {
    this.setData({
      showHelp: false,
    })
  },

  showHelpModel(e) {
    this.setData({
      showHelp: true,
    })
  }
})