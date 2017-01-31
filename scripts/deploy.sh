clone_testing_branch() {
  git clone https://$MY_OAUTH@github.com/bjoberg/brettoberg.com.git
}

setup_git() {
  git config --global user.email "brett@obergmail.com"
  git config --global user.name "bjoberg"
}

push_to_master() {
    git config -l
    git push origin testing:master
}

clone_testing_branch
echo "Testing branch cloned."
setup_git
echo "Git configuration setup."
push_to_master
echo "Testing branch has been pushed to master."