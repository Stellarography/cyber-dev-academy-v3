# GEMINI Manifest

project: Cyber Dev Academy
boot_sequence: Modules/01_BootSequence/
workflows:
  - SymbolChain: trigger motion_dispatch
  - BadgeStream: sync_audio_badges

folders:
  - Visuals: /Media/Visuals/
  - Narrations: /Media/Audio/Narrations/
  - Docs: /Docs/

commands:
  - gemini trigger SymbolChain
  - gemini sync BadgeStream