## **git命令前面都是git开头**
### 本地操作

- **git branch （name）：** 创建新的分支
- **git commint：** 在分支里提交东西
- **git checkout （name）：** 切换分支
- **git checkout -b （your-branch-name）：** 创建新的分支同时切换到新创建的分支上
- **git merge：** 将新建的分支合并到之前的分支（包括之前所有的提交记录）
- **git merge （name）：** 此刻定位在main上，输入 要合并的分支，将分支合并到main上
- **git rebase** 合并分支（复制）
- **git rebase main** 将想要移动的分支里的工作移动到main分支上，但是两者是并行的
- HEAD是一个对当前检出记录的符号引用，指向你正在的一个基础上进行工作的提交记录，通常情况下是指向分支名
- **cat.git/HEAD：** 查看HEAD的指向
- **git symbolic-ref HEAD：** 查看HEAD指向的一个引用
分离HEAD是让它指向某个具体的提交记录而不是分支名
- **git log：** 查看提交记录的哈希值
- 使用 **“^”** 向上移动一个提交记录
- 使用 **~(num)** 向上移动多个提交记录
- **"~"** 操作符后面可以跟数字，数字几就表示向上移动多少次
例如：git checkout HEAD~4:一次性后退四步
- 强制修改分支位置，使用 **-f** 选项让分支指向另一个提交
例如：git branch -f main HEAD ~3：将main分支强制指向HEAD的第三级父提交
- **git revert HEAD~1：** 远程撤销变更，可远程使用撤销更改并分享给别人
- **git reset HEAD：** 本地撤销变更，只对本地分支有效。通过把分支记录回退几个提交记录来实现撤销改动，*向上撤销，原来指向提交记录就跟从来没有提交过的一样
- **git reset HEAD~1:** 移回原来的地方，本地代码库不知道有提交的，在reset后，分支所作的变更还在，但是处于未加入暂存区状态
- **git cherry-pick (提交号)：** 将要提交的记录放在当前的分支下
- **git rebase -i （提交号）：** 对提交记录进行重新排序
- **git tag：** 新建、查看标签
- **git describe**用来描述离你最近的标签
- **git bisect：** 一个查找产生bug的提交记录的指令
- git describe（ref）：（ref）可以是任何能被git识别成提交记录的引用，如果没有指向的话，git会以目前所检出的位置（HEAD）
- ① **git checkout main^：** 不加数字修改符直接检出main^,会回到第一个父提交记录，也就是正上方的父
- ② **git checkout main^2：** 加数字的话会回到另一个父上
- **git checkout HEAD~^2~2：** 链式操作，用一条命令包含①②的结果

### 远程仓库
- **git clone：** 用于远程仓库配置环境，在本地创建一个远程仓库的拷贝
**origin/main：** 这个就是远程分支，分支叫 **“main”**，远程仓库默认名叫 **“origin”**
- **git fetch：** 从远程仓库获取数据（下载）
- **git status ：** 查看仓库状态
- **git init：** 创建一个空仓库，或者重新初始化一个已有仓库
“git fetch ”不会改变本地仓库的而状态，不会更新main分支，不会修改磁盘上的文件
- **git pull：** 从远程仓库下载并合并提交记录的更新
- **git merge origin/main：** 合并这个提交记录
- **git fake Teamwork：** （团队合作）默认操作在远程仓库main分支上做一次提交
- **git fakeTeamwork foo 3：** 指定提交的分支或者数量
- **git push：** 负责将变更的记录上传到指定的远程仓库，并在远程仓库上合并新的提交记录
- git fetch + git rebase可合并简写为git pull --rebase：将工作记录移交到远程分支的最新提交记录
- **rebase的优点：** 所有的提交都在一条线上
- **rebase的缺点：** 修改了提交树的历史
- **git push origin main：** 切到本地仓库中的“main”分支，获取所有的提交，再到远程仓库“origin”中找到“main”分支，将远程仓库中没有的提交记录都添加上去
- 当为git push指定place参数为main时，我们同时指定了提交记录的来源和去向。要同时为源和目的地指定 （place）的话，只需要用冒号“:” 将二者连起来就可以了，要是推送的目的分支不存在的话还会自动创建一个新的
例如：
git push origin foo^:main 
- **git push origin :foo ：** 用push传空值source，删除远程仓库的foo分支
- **git fetch origin :bar ：** 用fetch空到本地，会在本地创建一个新分支
- **git pull：** 是fetch后跟merge的缩写
- **reset：** 重新开始