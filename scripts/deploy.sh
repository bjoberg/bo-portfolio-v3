clone_repo() {
  git clone https://$MY_OAUTH@github.com/bjoberg/brettoberg.com.git
  cd brettoberg.com
}

checkout_testing_branch() {
  git checkout testing
}

setup_git() {
  git config --global user.email "brett@obergmail.com"
  git config --global user.name "bjoberg"
}

push_to_master() {
    git status
    git push origin testing:master
}

clone_repo
echo "Repo cloned. Moved into brettoberg.com directory."
checkout_testing_branch
echo "Testing branch checked out."
setup_git
echo "Git configuration setup."
push_to_master
echo "Testing branch has been pushed to master."