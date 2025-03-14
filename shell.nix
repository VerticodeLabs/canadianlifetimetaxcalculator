with import <nixpkgs> {};
mkShell {
  buildInputs = [
    git
    nodejs-18_x
  ];
}
