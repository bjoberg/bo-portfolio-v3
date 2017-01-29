setup_git() {
  git config --global user.email "brett@obergmail.com"
  git config --global user.name "bjoberg"
}

push_to_master() {
    git config -l
    git push origin testing:master
}

setup_git
echo "Git configuration setup"
push_to_master
echo "Testing branch has been pushed to master"