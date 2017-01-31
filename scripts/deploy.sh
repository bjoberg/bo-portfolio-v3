clone_testing_branch() {
  git clone https://$MY_OAUTH@github.com/bjoberg/brettoberg.com.git
  cd brettoberg.com
}

setup_git() {
  git config --global user.email "brett@obergmail.com"
  git config --global user.name "bjoberg"
}

push_to_master() {
    git status
    git push origin testing:master
}

clone_testing_branch
echo "Testing branch cloned. Moved into brettoberg.com directory."
setup_git
echo "Git configuration setup."
push_to_master
echo "Testing branch has been pushed to master."