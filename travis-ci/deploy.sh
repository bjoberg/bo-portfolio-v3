setup_git() {
  git config --global user.email "brett@obergmail.com"
  git config --global user.name "bjoberg"
}

add_remote() {
  git remote add origin https://github.com/bjoberg/brettoberg.com.git
}

push_to_master() {
    git push origin testing:master 
}

setup_git
add_remote
push_to_master