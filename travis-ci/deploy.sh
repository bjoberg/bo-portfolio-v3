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
echo "Git configuration setup"
add_remote
echo "Remote has been added"
push_to_master
echo "Testing branch has been pushed to master"