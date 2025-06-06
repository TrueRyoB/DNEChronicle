set fileencodings=utf-8,cp932
syntax on
set re=0

set number
set nowritebackup
set nobackup
set noswapfile
set autoread
set showcmd

set virtualedit=block
set nocompatible
set backspace=indent,eol,start
set ambiwidth=double
set ignorecase
set smartcase
set wrapscan
set incsearch
set hlsearch

set noerrorbells
set showmatch matchtime=1
set cmdheight=2
set laststatus=2
set display=lastline
set history=10000
hi Comment ctermfg=3
set expandtab
set shiftwidth=2
set softtabstop=2
set tabstop=2
set smartindent
set title

set wildmenu

set timeoutlen=300
set ttimeoutlen=0

let g:netrw_altv=1

" Mapping
nnoremap + <C-a>
nnoremap - <C-x>
nnoremap <Esc><Esc> :nohlsearch<CR>
