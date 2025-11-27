# To learn more about how to use Nix to configure your environment
# see: https://firebase.google.com/docs/studio/customize-workspace
{pkgs}: {
  # Which nixpkgs channel to use.
  channel = "stable-24.11"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
    pkgs.zulu
  ];
  # Sets environment variables in the workspace
  env = {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "pk_live_51RaC5TBupTZFq50QLX9dv4GHJi5qamB7ftmbAGR3KLBn5RGHZcuhDJ0jODx7SwAXBHt7FswfJqFSyZdNk79v6hoR00KTNA2USO";
    STRIPE_SECRET_KEY = "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";
  };
  # This adds a file watcher to startup the firebase emulators. The emulators will only start if
  # a firebase.json file is written into the user's directory
  services.firebase.emulators = {
    # Disabling because we are using prod backends right now
    detect = false;
    projectId = "demo-app";
    services = ["auth" "firestore"];
  };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # "vscodevim.vim"
    ];
    workspace = {
      onCreate = {
        default.openFiles = [
          "src/app/page.tsx"
        ];
      };
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" "--disable-host-check"];
          manager = "web";
        };
      };
    };
  };
}
