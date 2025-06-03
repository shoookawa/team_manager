# Team Manager

チーム管理のためのWebアプリケーション

## 機能

- ユーザー登録・ログイン機能
- チーム作成機能
- チーム参加機能
- チーム一覧表示

## 技術スタック

- フロントエンド: HTML/CSS, JavaScript
- バックエンド: Python (Flask)
- データベース: SQLite

## セットアップ方法

1. リポジトリのクローン
```bash
git clone https://github.com/shoookawa/team_manager
cd team_manager
```

2. 仮想環境の作成と有効化
```bash
python -m venv venv
# Windowsの場合
venv\Scripts\activate
# macOS/Linuxの場合
source venv/bin/activate
```

3. 依存関係のインストール
```bash
pip install -r requirements.txt
```

4. アプリケーションの実行
```bash
python app.py
```

5. ブラウザでアクセス
http://localhost:5000 にアクセスしてアプリケーションを使用できます。

## 開発者向け情報

- デバッグモードが有効になっています
- データベースは自動的に作成されます
- テンプレートは`templates`ディレクトリに配置されています
- 静的ファイルは`static`ディレクトリに配置されています 