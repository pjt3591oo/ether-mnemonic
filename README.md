# 니모닉을 이용하여 지갑복구

* libraries

```
bip39
ethereumjs-wallet
```

```bash
$ npm install
```

* 실행

```bash
$ node app
```

생성된 니모닉(mnemonic)을 다른 지갑에서 복구 후 계정생성하면 다음과 같이 순차적으로 account가 생성되는 것을 확인할 수 있다.

```
mnemonic is : "rally helmet style punch frost girl human ketchup almost stage often symbol"
seed is 0e9a97a0d9cbe3e6a3d031f3e76327c5fa728135145e8a2f98797710ea164c7eefc733126359d4de4b60e159959d74c4e6bdcdb7aad7ead63afbc10e72b7efe4
rootKey
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 0,
    index: 0,
    _privateKey: <Buffer 5e 3b 50 c1 4c c7 b7 66 19 f0 03 15 f4 8b 44 86 31 76 a2 92 9f fe 28 19 e1 aa 2d b8 4e 4e 5c cb>,
    _publicKey: <Buffer 02 99 f6 b9 9f fe 48 46 78 fa 21 9a 7d cc 6a 93 1f 19 d7 bd 45 94 e9 45 59 c0 7d 4f 14 0a ec 23 bb>,
    chainCode: <Buffer b2 e7 c4 2d 23 cc 55 29 43 40 65 5e 9c dc 89 ba 7a a6 80 10 a0 87 ac f2 e0 48 e8 90 34 f1 35 ed>,
    _fingerprint: 954967202,
    parentFingerprint: 0,
    _identifier: <Buffer 38 eb a4 a2 3d 02 2a dd d0 22 e3 27 c8 fe c4 df 51 02 13 dc>
  }
}
0
<CHILDKEY>
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 5,
    index: 0,
    _privateKey: <Buffer 1c b0 69 36 b6 b8 2e 34 cf 8c e4 e7 d3 3e 9f 9e 6c 4b 54 59 df bb 14 5b 5e 2a cb 7e 74 ca ce 6e>,
    _publicKey: <Buffer 02 83 06 1b a7 85 1e ec e4 21 42 ed 4c 07 34 02 31 59 56 ea 15 d2 b7 41 74 0a 8e 78 59 00 f0 ea c5>,
    chainCode: <Buffer 41 be b1 e1 29 c2 50 5c 64 89 3a 25 89 e3 79 85 80 d4 1c 14 ce 7b 9e e0 d8 80 ad 4e f9 ba 9e 8a>,
    _fingerprint: 2696096103,
    parentFingerprint: 312882262,
    _identifier: <Buffer a0 b3 29 67 7e 45 5b 0d 10 34 53 9c 23 db a4 cb 65 cc e5 f9>
  }
}
<WALLET IS>
Wallet {
  privateKey: <Buffer 1c b0 69 36 b6 b8 2e 34 cf 8c e4 e7 d3 3e 9f 9e 6c 4b 54 59 df bb 14 5b 5e 2a cb 7e 74 ca ce 6e>,
  publicKey: <Buffer 83 06 1b a7 85 1e ec e4 21 42 ed 4c 07 34 02 31 59 56 ea 15 d2 b7 41 74 0a 8e 78 59 00 f0 ea c5 48 db b3 86 09 3b c1 7b c2 37 c5 8c c7 e2 66 30 35 ac ... 14 more bytes>
}
[address] 1c10c297db326faaa80249e8ae2a2f4c6ffcbf5f
[privateKey] 1cb06936b6b82e34cf8ce4e7d33e9f9e6c4b5459dfbb145b5e2acb7e74cace6e
==============================================================================================
1
<CHILDKEY>
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 5,
    index: 1,
    _privateKey: <Buffer 45 e0 9f 1b 80 7b d9 1c 70 90 ac cb 67 d5 ed 3a bf 18 42 cc a3 78 ad e0 00 6c 22 af 3f b7 17 8e>,
    _publicKey: <Buffer 02 da 42 f8 23 81 77 98 4e f6 42 4f 58 6e bb f8 dd 85 39 d1 c8 a3 cb 57 3d 68 be 44 04 68 ff d6 12>,
    chainCode: <Buffer c6 05 c3 6a e3 07 45 e8 89 4d 69 e6 22 17 19 0b 07 28 cb b7 e6 16 62 06 57 bd 9f 8c 72 50 3a e1>,
    _fingerprint: 2180759888,
    parentFingerprint: 312882262,
    _identifier: <Buffer 81 fb c1 50 fc 4b f1 1d c6 c6 b1 06 6e 91 59 c1 f7 5b 55 7b>
  }
}
<WALLET IS>
Wallet {
  privateKey: <Buffer 45 e0 9f 1b 80 7b d9 1c 70 90 ac cb 67 d5 ed 3a bf 18 42 cc a3 78 ad e0 00 6c 22 af 3f b7 17 8e>,
  publicKey: <Buffer da 42 f8 23 81 77 98 4e f6 42 4f 58 6e bb f8 dd 85 39 d1 c8 a3 cb 57 3d 68 be 44 04 68 ff d6 12 cb 33 68 f0 cc 93 f5 59 85 c4 e6 58 c0 11 34 4f 2d f2 ... 14 more bytes>
}
[address] 37bbcb25deb225181d031b207b67186d137b8100
[privateKey] 45e09f1b807bd91c7090accb67d5ed3abf1842cca378ade0006c22af3fb7178e
==============================================================================================
2
<CHILDKEY>
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 5,
    index: 2,
    _privateKey: <Buffer 47 fd e8 9c a1 35 fe 98 35 38 3c aa 5d 29 23 c6 2b 25 ce a3 c8 99 27 f2 8d 4f 43 fa 73 68 9a 6c>,
    _publicKey: <Buffer 02 05 4d 62 45 87 f6 23 3e cb a2 41 04 50 f1 05 99 e4 8a f7 44 04 6f e3 2e 83 ed af ff a6 ab 10 67>,
    chainCode: <Buffer ba fb 8a ec 59 94 52 4d 3f ea 83 f8 65 52 1d 17 2c 1f 61 b6 09 59 28 12 09 44 2a b9 3c c7 af 91>,
    _fingerprint: 31272060,
    parentFingerprint: 312882262,
    _identifier: <Buffer 01 dd 2c 7c b2 5a de 1c be 1a 5f 7d 36 b1 ce 34 53 b4 ae 54>
  }
}
<WALLET IS>
Wallet {
  privateKey: <Buffer 47 fd e8 9c a1 35 fe 98 35 38 3c aa 5d 29 23 c6 2b 25 ce a3 c8 99 27 f2 8d 4f 43 fa 73 68 9a 6c>,
  publicKey: <Buffer 05 4d 62 45 87 f6 23 3e cb a2 41 04 50 f1 05 99 e4 8a f7 44 04 6f e3 2e 83 ed af ff a6 ab 10 67 62 9e 6f 8e 6c 42 df d1 00 e4 9a d8 37 86 f5 ab 75 b9 ... 14 more bytes>
}
[address] 386ef2117cea6f831f5a498ad6a1e911703663df
[privateKey] 47fde89ca135fe9835383caa5d2923c62b25cea3c89927f28d4f43fa73689a6c
==============================================================================================
3
<CHILDKEY>
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 5,
    index: 3,
    _privateKey: <Buffer 8c e7 d3 ba 68 37 8a 79 da a3 a9 6f ca 96 69 5d 48 20 ca 9a f1 8e be 64 21 89 40 27 a9 b6 ac 17>,
    _publicKey: <Buffer 03 65 81 7c b0 c8 e6 39 e7 c4 de ad cc 6a 98 a0 0e a5 c1 b9 46 09 e7 32 97 a8 93 ea e4 20 dd 36 52>,
    chainCode: <Buffer ca 63 e1 5c ac a2 8b c2 39 a5 17 06 a8 49 9a 2f 1e ba e6 59 1d 93 03 a4 67 10 8c bd dd d2 fb c6>,
    _fingerprint: 3681902438,
    parentFingerprint: 312882262,
    _identifier: <Buffer db 75 5f 66 63 54 2f 70 2f 28 21 76 da 1d b5 38 16 27 7b 21>
  }
}
<WALLET IS>
Wallet {
  privateKey: <Buffer 8c e7 d3 ba 68 37 8a 79 da a3 a9 6f ca 96 69 5d 48 20 ca 9a f1 8e be 64 21 89 40 27 a9 b6 ac 17>,
  publicKey: <Buffer 65 81 7c b0 c8 e6 39 e7 c4 de ad cc 6a 98 a0 0e a5 c1 b9 46 09 e7 32 97 a8 93 ea e4 20 dd 36 52 1a 0c 81 0f d2 29 3d de 93 60 d6 5a c6 f1 ed b3 39 81 ... 14 more bytes>
}
[address] f282d8239a4021a29f506d8eabe9ca8d1ee9fabe
[privateKey] 8ce7d3ba68378a79daa3a96fca96695d4820ca9af18ebe6421894027a9b6ac17
==============================================================================================
4
<CHILDKEY>
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 5,
    index: 4,
    _privateKey: <Buffer d3 56 11 f9 1d 85 89 96 4f 25 01 41 ce 93 14 64 31 de 77 35 9f e0 5f 7b b1 ad 97 34 51 92 ee 78>,
    _publicKey: <Buffer 03 75 58 c7 2f 51 89 02 da e7 de ec 72 c6 36 f4 5c c9 95 7e c9 61 61 a3 dc c2 81 e2 8a 5b 9e 55 f1>,
    chainCode: <Buffer e2 90 16 31 4b 10 4b 3c 2e 77 7d 96 e2 ae 1d dc 00 24 4b 99 7d d1 9c df 6b 11 10 d7 41 11 51 db>,
    _fingerprint: 2276812856,
    parentFingerprint: 312882262,
    _identifier: <Buffer 87 b5 68 38 5a af f4 37 d2 ce 3e 9d e7 73 88 55 70 8d 40 cc>
  }
}
<WALLET IS>
Wallet {
  privateKey: <Buffer d3 56 11 f9 1d 85 89 96 4f 25 01 41 ce 93 14 64 31 de 77 35 9f e0 5f 7b b1 ad 97 34 51 92 ee 78>,
  publicKey: <Buffer 75 58 c7 2f 51 89 02 da e7 de ec 72 c6 36 f4 5c c9 95 7e c9 61 61 a3 dc c2 81 e2 8a 5b 9e 55 f1 90 d4 98 79 9e 02 93 db d6 e6 c8 4d 80 e9 65 2e f2 60 ... 14 more bytes>
}
[address] a486ca71b86eb004f1748cb57507b361df562d27
[privateKey] d35611f91d8589964f250141ce93146431de77359fe05f7bb1ad97345192ee78
==============================================================================================
5
<CHILDKEY>
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 5,
    index: 5,
    _privateKey: <Buffer 47 8c 21 c9 b5 e4 91 16 0c 3f 2c 94 e1 9b d7 64 98 32 1a cd 4e 23 a5 26 c5 97 91 e6 1e 03 31 99>,
    _publicKey: <Buffer 03 61 15 95 25 38 be f2 92 17 03 52 9c b0 c8 f6 67 b0 ef 39 6d c5 24 36 f2 7b 45 49 ff 46 8a 92 7b>,
    chainCode: <Buffer 62 c7 c9 ff d4 b3 cc 3a a2 fc 20 ad b6 29 84 ed bd 8a ab d8 e6 94 a7 e0 b0 2c 06 d8 a0 40 9f 41>,
    _fingerprint: 2017235292,
    parentFingerprint: 312882262,
    _identifier: <Buffer 78 3c 91 5c cc 51 9f c2 12 a8 2f 31 ab 90 28 59 be 40 0c a9>
  }
}
<WALLET IS>
Wallet {
  privateKey: <Buffer 47 8c 21 c9 b5 e4 91 16 0c 3f 2c 94 e1 9b d7 64 98 32 1a cd 4e 23 a5 26 c5 97 91 e6 1e 03 31 99>,
  publicKey: <Buffer 61 15 95 25 38 be f2 92 17 03 52 9c b0 c8 f6 67 b0 ef 39 6d c5 24 36 f2 7b 45 49 ff 46 8a 92 7b 9e 2c a1 0f 95 21 98 59 9c 3e 4e f2 8e b5 38 5a 0a d1 ... 14 more bytes>
}
[address] f42181170b341803cead8674e8bf0f3f026f4c81
[privateKey] 478c21c9b5e491160c3f2c94e19bd76498321acd4e23a526c59791e61e033199
==============================================================================================
6
<CHILDKEY>
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 5,
    index: 6,
    _privateKey: <Buffer 90 cd 97 e4 5c d6 83 1e 2a be aa 13 a7 66 c9 49 40 a0 08 cf 4a af b9 08 a4 91 70 f4 45 85 bf 4f>,
    _publicKey: <Buffer 03 f8 4d 25 e9 b9 0f 9c c6 1a f5 12 cd 78 84 5f c8 38 5d a1 4e 45 fa 9d 30 00 1f c2 9e fc ea 53 2e>,
    chainCode: <Buffer f8 ec 5d ac 21 8c e0 0c c1 eb aa e9 b4 9e ec 4f 41 0c 8e 4a 7e a5 14 b5 a2 69 11 d4 40 1c c9 e5>,
    _fingerprint: 3557409559,
    parentFingerprint: 312882262,
    _identifier: <Buffer d4 09 c3 17 d9 79 77 c0 f9 6b 4a 8b 6e 30 89 9f 54 d1 f2 c6>
  }
}
<WALLET IS>
Wallet {
  privateKey: <Buffer 90 cd 97 e4 5c d6 83 1e 2a be aa 13 a7 66 c9 49 40 a0 08 cf 4a af b9 08 a4 91 70 f4 45 85 bf 4f>,
  publicKey: <Buffer f8 4d 25 e9 b9 0f 9c c6 1a f5 12 cd 78 84 5f c8 38 5d a1 4e 45 fa 9d 30 00 1f c2 9e fc ea 53 2e ec e9 f3 38 af 01 db 2c 27 df 71 1b 20 3a a0 d0 e6 d3 ... 14 more bytes>
}
[address] e9e04c2d856c771cba42a27c4908e081a19bd27e
[privateKey] 90cd97e45cd6831e2abeaa13a766c94940a008cf4aafb908a49170f44585bf4f
==============================================================================================
7
<CHILDKEY>
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 5,
    index: 7,
    _privateKey: <Buffer cb 26 d9 cb d3 c1 fe 56 32 bb b8 5a 16 0a 14 64 01 42 31 fd 97 e3 37 93 5c b1 e4 cf 1f 77 3d bb>,
    _publicKey: <Buffer 03 81 c0 41 0f 64 39 6b 2b 1d 4e 0b ce 47 3d b0 d8 09 4a c5 45 96 81 94 a2 dd f9 f1 8a 5c 90 88 6f>,
    chainCode: <Buffer 38 fc 4f a7 fd dd 0b bd 7e 7e c6 3d cb 2a 08 f0 61 a4 c0 a4 59 79 1e c5 0c 0a d4 f5 9c d7 a0 30>,
    _fingerprint: 313691679,
    parentFingerprint: 312882262,
    _identifier: <Buffer 12 b2 8e 1f 66 5d 6f c0 1d c3 f5 de 93 d1 2b 00 85 ae 06 b8>
  }
}
<WALLET IS>
Wallet {
  privateKey: <Buffer cb 26 d9 cb d3 c1 fe 56 32 bb b8 5a 16 0a 14 64 01 42 31 fd 97 e3 37 93 5c b1 e4 cf 1f 77 3d bb>,
  publicKey: <Buffer 81 c0 41 0f 64 39 6b 2b 1d 4e 0b ce 47 3d b0 d8 09 4a c5 45 96 81 94 a2 dd f9 f1 8a 5c 90 88 6f 1b 29 fb 27 55 a2 db 8e 3a 34 62 34 ea ea 9a 4a 55 f5 ... 14 more bytes>
}
[address] dcddb93af8dd9d31b5ecad19fb3496072e532a6a
[privateKey] cb26d9cbd3c1fe5632bbb85a160a1464014231fd97e337935cb1e4cf1f773dbb
==============================================================================================
8
<CHILDKEY>
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 5,
    index: 8,
    _privateKey: <Buffer f1 bf 5d f2 c9 a3 2a 2c 0d 4b bc a8 55 f0 11 59 db 2a d9 0b 96 bc 16 c1 4d a8 c8 e7 cd 8a c5 c8>,
    _publicKey: <Buffer 02 48 3d 86 74 76 c6 bc dc 2c b4 3f a7 7d 2f bd 7f 6b 29 32 72 66 77 3a 23 8b ad a0 24 c9 6d 23 49>,
    chainCode: <Buffer 4a 45 b5 96 50 21 7d c2 0f 97 f6 9c c8 ce fb 9d 6e f3 47 7a e9 20 21 d7 33 c8 d9 2d 2d d7 a4 16>,
    _fingerprint: 2268028633,
    parentFingerprint: 312882262,
    _identifier: <Buffer 87 2f 5e d9 b0 40 4e 20 19 ad 1a 41 c9 86 a0 b2 19 db 9f 93>
  }
}
<WALLET IS>
Wallet {
  privateKey: <Buffer f1 bf 5d f2 c9 a3 2a 2c 0d 4b bc a8 55 f0 11 59 db 2a d9 0b 96 bc 16 c1 4d a8 c8 e7 cd 8a c5 c8>,
  publicKey: <Buffer 48 3d 86 74 76 c6 bc dc 2c b4 3f a7 7d 2f bd 7f 6b 29 32 72 66 77 3a 23 8b ad a0 24 c9 6d 23 49 ff 68 f5 e6 59 5e 53 1c 47 84 43 a5 30 9a 17 bb d3 63 ... 14 more bytes>
}
[address] 2cf49d16383292513e56f315e7e1d687c92069c5
[privateKey] f1bf5df2c9a32a2c0d4bbca855f01159db2ad90b96bc16c14da8c8e7cd8ac5c8
==============================================================================================
9
<CHILDKEY>
EthereumHDKey {
  _hdkey: HDKey {
    versions: { private: 76066276, public: 76067358 },
    depth: 5,
    index: 9,
    _privateKey: <Buffer 76 92 7a 9c 6a 0f 65 ba 59 84 65 3b 3e 06 f8 a9 f5 b4 99 de 17 ce c6 19 8c cb 54 ba 8b c1 79 d0>,
    _publicKey: <Buffer 02 6f b1 24 6a fa 63 06 54 ab 8e 44 53 0b bd 30 6f 86 31 a4 76 da d8 29 ef 95 8b 9a e3 09 ac 15 71>,
    chainCode: <Buffer 09 42 f2 b1 6d fa ac e4 b5 27 0e ae 4f 63 b4 4a a6 04 ce fd 54 29 f9 1b 66 94 56 76 00 40 24 72>,
    _fingerprint: 3992792330,
    parentFingerprint: 312882262,
    _identifier: <Buffer ed fd 2d 0a 60 4d ac 64 52 5a 20 67 e2 26 78 8e 30 f8 25 97>
  }
}
<WALLET IS>
Wallet {
  privateKey: <Buffer 76 92 7a 9c 6a 0f 65 ba 59 84 65 3b 3e 06 f8 a9 f5 b4 99 de 17 ce c6 19 8c cb 54 ba 8b c1 79 d0>,
  publicKey: <Buffer 6f b1 24 6a fa 63 06 54 ab 8e 44 53 0b bd 30 6f 86 31 a4 76 da d8 29 ef 95 8b 9a e3 09 ac 15 71 08 fd 19 33 a0 30 fe 15 fe eb a1 51 76 8a ef bb ea b1 ... 14 more bytes>
}
[address] 0f8ec65cf652ac6df3e6450ef760378ad66bf813
[privateKey] 76927a9c6a0f65ba5984653b3e06f8a9f5b499de17cec6198ccb54ba8bc179d0
==============================================================================================
```
