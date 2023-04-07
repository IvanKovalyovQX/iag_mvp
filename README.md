- name: Deploy report to Github Pages
        if: always()
        uses: peaceiris/actions-gh-pages@v2
        env:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          PUBLISH_BRANCH: gh-pages
          PUBLISH_DIR: allure-history